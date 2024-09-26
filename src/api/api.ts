import { JiraResponse } from "../shared/types/types";
import { PROJECT } from "../config/config";
import { useState, useEffect } from "react";

export const useFetchJiraDetails = (_event: any, project: PROJECT) => {
  const [data, setData] = useState<JiraResponse | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let issuesToTrack: JiraResponse | null = null;
      try {
        const response = await fetch(
          `https://jira-tracker-server.onrender.com/${project}`
        );
        // console.log(`https://jira-tracker-server.onrender.com/${project}`)
        // const response = await fetch(`http://localhost:5002/${project}`, {
        //   //cache: "force-cache",
        // });
        if (!response.ok) {
          setError(response.statusText);
        }
        const data = await response.json();
        issuesToTrack = data.data;
        console.log(issuesToTrack);

        // return issuesToTrack;
        setData(issuesToTrack);
        setError(null);
      } catch (error: any) {
        console.log(error);
        // return { error: error.message };
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [project]);

  return { data, loading, error };
};

// ipcMain.handle("fetch-jira-details", async (event, project: PROJECT) => {
//     const { board, credential, team } = getConfig(project);
//     var jira = new JiraApi(credential);
//
//     try {
//         const filter = jiraRecentActivityFilter(team, board);
//         issuesToTrack = (await jira.searchJira(filter, {
//             fields: [
//                 "id",
//                 "comment",
//                 "worklog",
//                 "key",
//                 "summary",
//                 "status",
//                 "assignee",
//                 "updated",
//                 "priority",
//                 "labels",
//                 "issuetype",
//                 "reporter",
//                 "created",
//                 "duedate",
//                 "description",
//                 "parent",
//                 "statusCategory",
//             ],
//             expand: [""],
//             maxResults: 150,
//         })) as JiraResponse;
//
//         //extract worklogs for each issues
//         //
//         if (project === "SALAM") {
//             //Perform 5 requests in parallel
//             const BATCH_SIZE = 15;
//             const fetchWorklogsInBatches = async (issues: Issue[]) => {
//                 for (let i = 0; i < issues.length; i += BATCH_SIZE) {
//                     // Slice the issues into batches of 5
//                     const batch = issues.slice(i, i + BATCH_SIZE);
//
//                     // Create an array of promises for fetching worklogs in parallel
//                     const worklogPromises = batch.map(async (issue) => {
//                         const worklogs = await jira.getIssueWorklogs(issue.id);
//                         issue.fields.worklog = worklogs as any;
//                         return issue;
//                     });
//
//                     // Wait for all promises in this batch to resolve
//                     await Promise.all(worklogPromises);
//                 }
//             };
//             await fetchWorklogsInBatches(issuesToTrack.issues);
//         }
//         issuesToTrack.issues.forEach((issue) =>
//             resolveCommentUsers(issue, createTeamMap(team))
//         );
//
//         return issuesToTrack;
//     } catch (error: any) {
//         console.log(error);
//         return { error: error.message };
//     }
// });
