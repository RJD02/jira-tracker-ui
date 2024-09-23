import { User, WorkItem } from "../components/workitem/WorkItem.type";
import { getLastNBusinessDays } from "./utils";

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

