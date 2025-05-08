import {
  JiraIssuesQuery,
  JiraIssuesQueryVariables,
} from "@/__generated__/graphql";
import { GET_JIRA_ITEMS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";

export function useJiraDetails(project: string, forced: boolean = false) {
  const response = useQuery<JiraIssuesQuery, JiraIssuesQueryVariables>(
    GET_JIRA_ITEMS,
    {
      variables: { project, forced },
      fetchPolicy: "cache-and-network",
      pollInterval: 1000 * 30,
    }
  );
  const data = response.data;
  return [data, response] as const;
}
