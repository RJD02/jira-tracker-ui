// import { Project } from "@/__generated__/graphql";
import { GET_JIRA_ITEMS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";
// import { Variable } from "lucide-react";

export function useJiraDetails(project: string) {
    const response = useQuery(GET_JIRA_ITEMS, {
        variables: { project: project },
        fetchPolicy: "cache-and-network",
    });
    // console.log("response")
    // console.log(response.variables)
    const data = response.data;
    return {
        ...response,
        issues: data?.issues,
        members: data?.members || [],
        projects: data?.allProjects,
    };
}


