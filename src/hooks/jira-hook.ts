import { JiraProject, Project } from "@/__generated__/graphql";
import { GET_JIRA_ITEMS, GET_PROJECTS_FROM_CREDS } from "@/api/grapqh";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useCallback } from "react";

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

export const useGetProjectsFromCreds = () => {
  const [fetchProjects, { loading, data }] = useLazyQuery(
    GET_PROJECTS_FROM_CREDS
  );
  console.log(GET_PROJECTS_FROM_CREDS);

  const getProjects = useCallback(
    async (baseUrl: string, token: string, username: string) => {
      const emptyRes: JiraProject[] | null = [];
      try {
        const result = await fetchProjects({
          variables: {
            baseurl: baseUrl,
            token,
            username,
          },
        });

        return {
          projects: result.data?.jiraprojects || emptyRes,
          loading,
        };
      } catch (error) {
        console.error("Error fetching projects:", error);
        return {
          projects: emptyRes,
          loading: false,
        };
      }
    },
    [fetchProjects]
  );
  return getProjects;
};
