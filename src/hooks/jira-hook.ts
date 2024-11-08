import { Project } from "@/__generated__/graphql";
import { GET_JIRA_ITEMS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";

export function useJiraDetails(project: string) {
    const response = useQuery(GET_JIRA_ITEMS, {
        variables: { project: project as Project },
        fetchPolicy: "cache-and-network",
    });
    const data = response.data;
    return {
        ...response,
        issues: data?.issues,
        members: data?.members || [],
        projects: data?.projects,
    };
}


