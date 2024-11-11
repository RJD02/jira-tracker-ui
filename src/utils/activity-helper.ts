import {
  User,
  WorkItem,
  WorkItemWithActivities,
} from "../components/workitem/WorkItem.type";
import { Participant } from "./Participant";
import { getLastNBusinessDays } from "../lib/utils";

/*
 * Given a work item object and n business days, get
 * all participants who have worked on the item
 * Participants are
 * - assignee,
 * - comment authors in last n business day,
 * -- work log authors in last n business day
 * @param workItem - The work item object
 * @param n - Number of business days
 * @returns An array of participants{ name: string, role: string[] }
 * @example
 * getParticipants(workItem, 2)
 * // Returns [{name: "Alice", role: ["owner"]},
 *   {name: "Bob", role: ["comment"]}, {name: "Charlie", role: ["worklog", "comment"]}]
 */

export interface Activities {
  author: User;
  role: string[];
  recentActivity: { content: string; type: string; detail?: any }[];
}

export function getParticipantActivity(
  workItem: WorkItem,
  n = 1
): Activities[] {
  const activities: Activities[] = [];
  const lastNBusinessDate = getLastNBusinessDays(n);

  // Add assignee
  activities.push({
    author: workItem.assignee,
    role: ["owner"],
    recentActivity: [],
  });

  // Add comment authors
  workItem.comments
    .filter((comment) => new Date(comment.createdAt) > lastNBusinessDate)
    .forEach((comment) =>
      activities.push({
        author: comment.author,
        role: ["comment"],
        recentActivity: [{ content: comment.content, type: "comment" }],
      })
    );

  // Add work log authors
  workItem.hoursLogged
    ?.filter((log) => new Date(log.createdAt) > lastNBusinessDate)
    .forEach((log) =>
      activities.push({
        author: log.author,
        role: ["worklog"],
        recentActivity: [
          { content: log.timeSpent, type: "worklog", detail: log },
        ],
      })
    );
  //reduce the participants and merge the roles
  return activities.reduce((acc, recentActivity) => {
    const existingParticipantActivity = acc.find(
      (p) => p.author.id === recentActivity.author.id
    );
    if (existingParticipantActivity) {
      existingParticipantActivity.role = Array.from(
        new Set([...existingParticipantActivity.role, ...recentActivity.role])
      );
      existingParticipantActivity.recentActivity = Array.from(
        new Set([
          ...existingParticipantActivity.recentActivity,
          ...recentActivity.recentActivity,
        ])
      );
    } else {
      acc.push(recentActivity);
    }
    return acc;
  }, [] as Activities[]);
}

/**
 * Comparator function to sort activities
 * Activities are sorted by story key and then by role.
 * Role is given weight as follows:
 * - owner: 100
 * - worklog: 10
 * - comment: 1
 * @param a - First activity
 * @param b - Second activity
 * @returns 1 if b is greater, -1 if a is greater
 */
export const activityComparator = (
  a: WorkItemWithActivities,
  b: WorkItemWithActivities
) => {
  const roleMap = (roles: string[]) =>
    roles
      .map((role) => {
        switch (role) {
          case "owner":
            return 100;
          case "worklog":
            return 10;
          default:
            return 1;
        }
      })
      .reduce((acc, val) => acc + val, 0);

  const storyAWeight = a.issuetype.name === "Story" ? 2000 : 0;
  const storyBWeight = b.issuetype.name === "Story" ? 2000 : 0;

  const roleA = roleMap(a.role) + storyAWeight;
  const roleB = roleMap(b.role) + storyBWeight;
  return b.storyKey + roleB > a.storyKey + roleA ? 1 : -1;
};

export function classifyWorkItem(
  workItem: WorkItemWithActivities,
  participant: Participant
) {
  const category = workItem.statusCategory;
  switch (true) {
    case isBlocked(workItem.status, workItem.labels) && isOwner(workItem.role): // only for owner
      participant.addBlocker(workItem);
      break;
    case isDone(category):
      participant.addWorkDone(workItem);
      break;
    case ["In Progress"].includes(category) &&
      isOwner(workItem.role) &&
      !isTodoState(workItem.status):
      participant.addPlannedWork(workItem);
      break;
    case isTodoState(category) && isOwner(workItem.role):
      participant.addBacklog(workItem);
      break;

    default:
      participant.addWorkDone(workItem);
  }
}
export function isTodoState(status: string) {
  return ["To Do", "To-Do"].includes(status);
}

export function isBlocked(status: string, labels: string[] = []) {
  return (
    labels.find((label) => label.match(/block.*/i)) ||
    status.toLowerCase().match(/block.*|hold.*|waiting.*|pending.*/i)
  );
}

export function isDone(status: string) {
  return ["Closed", "Done"].includes(status);
}

export function isOwner(role: string[] = []) {
  return role.includes("owner");
}
