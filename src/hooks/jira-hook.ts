import { GET_JIRA_ITEMS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";

export function useJiraDetails(project: string) {
  const response = useQuery(GET_JIRA_ITEMS, {
    variables: { project },
    fetchPolicy: "cache-and-network",
    pollInterval: 1000 * 30,
  });
  const data = response.data;
  return [data, response] as const;
}
