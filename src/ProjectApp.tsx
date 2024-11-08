import { useQuery } from "@apollo/client";
import { Project } from "./__generated__/graphql";
import { GET_JIRA_ITEMS } from "./api/grapqh";
import { WorkItem } from "./components/workitem/WorkItem.type";
import HomePage from "./Home";
import { getParticipantActivity } from "./utils/activity-helper";
import { isAfterLastNBusinessDays } from "./lib/utils";
import { classifyWorkItem } from "./utils/activity-helper";
import { Participant } from "./utils/Participant";

export interface AppProps {
  project: string;
}

export const ProjectApp: React.FC<AppProps> = ({
  project = "STAR",
}: AppProps) => {
  const response = useQuery(GET_JIRA_ITEMS, {
    variables: { project: project as Project },
    fetchPolicy: "cache-and-network",
  });
  const { data, loading, error } = response;
  const jiraDetails = data?.issues;
  const members = data?.members || [];
  const projects = data?.projects;
  if (loading && !jiraDetails) return <p>Loading</p>;

  const workItems: WorkItem[] =
    jiraDetails?.issues
      ?.map((issue) => {
        const workItem: WorkItem = {
          id: issue.id,
          key: issue.key,
          createdAt: issue.fields.created,
          duedate: issue.fields.duedate,
          storyKey:
            issue.fields.parent?.fields.issuetype.name.toLowerCase() === "story"
              ? issue.fields.parent.key
              : issue.key,
          url: issue.url,
          lastUpdated: issue.fields.updated,
          title: issue.fields.summary,
          labels: issue.fields.labels,
          description: issue.fields.description ?? "",
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

  const allParticipants = members.map(
    (member) =>
      new Participant(member.id, member?.name, member?.role || "other")
  );

  // regroup workItem array by assignee
  const memberWiseWorkItems = workItems.reduce((result, item) => {
    const participantActivity = getParticipantActivity(item);
    participantActivity.forEach((acitivity) => {
      const participantId = acitivity.author.id;
      const participant = result.find((p) => p.id === participantId);
      if (!participant) return;
      const itemWithParticipant = { ...item, ...acitivity };
      classifyWorkItem(itemWithParticipant, participant);
    });
    return result;
  }, allParticipants);

  const memberWorkItem = Object.values(memberWiseWorkItems);

  const position = (id: string) =>
    members.findIndex((t) => t.id === id) > -1
      ? members.findIndex((t) => t.id === id)
      : 1000;

  const memberlist = Object.values(memberWorkItem);

  const projectView: Participant = new Participant(
    "project",
    "Project",
    "project"
  );
  // classifyWorkItem(workItems, projectView);

  memberlist
    .filter((m) => m.memberRole === "developer")
    .reduce((project, member) => {
      project.addWorkDone(member.getParticipant().workDone);
      project.addPlannedWork(member.getParticipant().plannedWork);
      project.addBlocker(member.getParticipant().blockers);
      project.addBacklog(member.getParticipant().backlog);
      return project;
    }, projectView);

  const finalItems = [projectView, ...memberlist].sort(
    (a, b) => position(a.id) - position(b.id)
  );
  return (
    <div>
      {error == null ? <></> : <p>{error.message}</p>}
      {loading && !jiraDetails ? (
        <div>Loading...</div>
      ) : (
        <HomePage
          members={finalItems.map((item) => item.getParticipant())}
          projectLabel={
            projects?.find((p) => p.id === project)!.label || project
          }
        />
      )}
    </div>
  );
};
