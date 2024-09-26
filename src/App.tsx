import { isAfterLastNBusinessDays } from "./utils/utils";
import { getParticipantActivity } from "./utils/activity-helper";
import {
  WorkItem,
  MemberWorkItem,
  WorkItemWithActivities,
} from "./components/workitem/WorkItem.type";
import { getConfig, PROJECT } from "./config/config";
import { useFetchJiraDetails } from "./api/api";
import HomePage from "./Home";

interface AppProps {
  project: PROJECT;
}

const ProjectApp: React.FC<AppProps> = ({ project = "STAR" }: AppProps) => {
  const {
    data: jiraDetails,
    loading,
    error,
  } = useFetchJiraDetails("fetch-jira-details", project);
  if (loading) return <p>Loading</p>;

  const config = getConfig(project);
  const workItems: WorkItem[] =
    jiraDetails?.issues
      ?.map((issue) => {
        const workItem: WorkItem = {
          id: issue.id,
          key: issue.key,
          storyKey:
            issue.fields.parent?.fields.issuetype.name.toLowerCase() === "story"
              ? issue.fields.parent.key
              : issue.key,
          url: `${config.baseurl}/browse/${issue.key}`,
          lastUpdated: issue.fields.updated,
          title: issue.fields.summary,
          labels: issue.fields.labels,
          description: issue.fields.description,
          priority: {
            id: issue.fields.priority.id,
            name: issue.fields.priority.name,
          },
          issuetype: {
            id: issue.fields.issuetype.id,
            name: issue.fields.issuetype.name,
          },
          parent: {
            id: issue.fields.parent?.id || "",
            key: issue.fields.parent?.key || "",
            title: issue.fields.parent?.fields.summary || "",
            issuetype: {
              id: issue.fields.parent?.fields.issuetype.id || "",
              name: issue.fields.parent?.fields.issuetype.name || "",
            },
          },
          hoursLogged: issue.fields.worklog?.worklogs.map((log) => ({
            author: {
              id: log.author.accountId,
              displayName: log.author.displayName,
            },
            timeSpent: log.timeSpent,
            timeSpentSeconds: log.timeSpentSeconds,
            createdAt: log.created,
          })),
          status: issue.fields.status.name,
          statusCategory: issue.fields.status.statusCategory.name,
          // assigneeId: issue.fields.assignee?.accountId || "",
          assignee: {
            id: issue.fields.assignee?.accountId || "",
            displayName: issue.fields.assignee?.displayName || "Unassigned",
          },
          comments: issue.fields.comment.comments
            .map((comment) => ({
              author: {
                id: comment.author.accountId,
                displayName: comment.author.displayName,
              },
              content: comment.body,
              createdAt: comment.created,
            }))
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            ),
        };
        return workItem;
      })
      .filter(
        (w) =>
          isAfterLastNBusinessDays(w.lastUpdated) ||
          w.statusCategory == "In Progress" ||
          w.statusCategory == "To Do"
      ) || [];

  // regroup workItem array by assignee
  const memberWiseWorkItems = workItems.reduce((result, item) => {
    const participantActivity = getParticipantActivity(item);
    participantActivity.forEach((participant) => {
      const participantId = participant.author.id;
      if (!result[participantId]) {
        result[participantId] = {
          id: participantId,
          name:
            config.team.find((m) => m.id === participantId)?.name ||
            participant.author.displayName,
          avatar: "/placeholder.svg?height=40&width=40",
          role: participant.role,
          workDone: [],
          plannedWork: [],
          blockers: [],
        };
      }

      const itemWithParticipant = { ...item, ...participant };
      // if role is owner, then only item should go in plannedwork
      // else it should go in work Done
      // few of the status are wrongly configured in To Do
      //therefore putting few status as exception
      const todoState = ["To Do", "To-Do"];
      const category = item.statusCategory;
      const isOwner = participant.role.includes("owner");
      const isBlocked =
        item.labels.find((label) => label.match(/block.*/i)) ||
        item.status.match(/block.*|hold.*/i);
      switch (true) {
        case ["Closed", "Done"].includes(category):
          result[participantId].workDone.push(itemWithParticipant);
          break;
        case ["In Progress"].includes(category) &&
          isOwner &&
          !todoState.includes(item.status):
          result[participantId].plannedWork.push(itemWithParticipant);
          break;
        case ["To Do"].includes(category) && isOwner:
          result[participantId].blockers.push(itemWithParticipant);
          break;
        case isBlocked && isOwner: // only for owner
          result[participantId].blockers.push(itemWithParticipant);
          break;

        default:
          result[participantId].workDone.push(itemWithParticipant);
      }
    });
    return result;
  }, {} as { [assignee: string]: MemberWorkItem });
  //sort the work items as
  // 1. owner role is sorted over other roles
  // 2. worklogs are sorted over comments.
  const memberWorkItem = Object.values(memberWiseWorkItems);
  for (const item in memberWorkItem) {
    const sortedActivities = (
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

    memberWorkItem[item].plannedWork.sort(sortedActivities);
    memberWorkItem[item].workDone.sort(sortedActivities);
    memberWorkItem[item].blockers.sort(sortedActivities);
  }

  const position = (id: string) =>
    config.team.findIndex((t) => t.id === id) > -1
      ? config.team.findIndex((t) => t.id === id)
      : 1000;
  const finalItems = Object.values(memberWorkItem).sort(
    (a, b) => position(a.id) - position(b.id)
  );
  return (
    <div>
      {error == null ? <></> : <p>{error}</p>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <HomePage members={finalItems} project={project} />
      )}
    </div>
  );
};

export default ProjectApp;
