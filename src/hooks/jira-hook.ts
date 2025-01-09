import { JiraProject, Project } from "@/__generated__/graphql";
import {
  CREATE_PROJECT_MUTATION,
  CREATE_SITEURL_MUTATION,
  CREATE_USER_MUTATION,
  GET_JIRA_ITEMS,
  GET_PROJECTS_FROM_CREDS,
  GET_USERS_FROM_CREDS,
} from "@/api/grapqh";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useCallback } from "react";

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

export const useCreateProject = () => {
  console.log(CREATE_SITEURL_MUTATION);
  const [fetchSite, result] = useMutation(CREATE_SITEURL_MUTATION);
  //   const [fetchProject, { loadingProject, dataProject }] = useLazyQuery(
  //     CREATE_PROJECT_MUTATION
  //   );
  const [fetchProject, createProjectResult] = useMutation(
    CREATE_PROJECT_MUTATION
  );
  const createSiteUrl = async (siteUrl: string) => {
    try {
      console.log("SiteURL", siteUrl);
      const result = await fetchSite({
        variables: {
          siteUrl: siteUrl,
        },
      });
      //   console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  const createProject = async (
    projectId: string,
    siteId: number,
    label: string,
    baseUrl: string,
    email: string,
    token: string,
    projectKey: string
  ) => {
    try {
      console.log("All variables", {
        projectId,
        siteId,
        label,
        baseUrl,
        email,
        token,
        projectKey,
      });
      const result = await fetchProject({
        variables: {
          createProject2Id: projectId,
          siteId,
          label,
          baseurl: baseUrl,
          email,
          token,
          projectKey,
        },
      });
      return result;
    } catch (error) {
      console.log("Error creating project:", error);
      return null;
    }
  };
  return [createSiteUrl, createProject] as const;
};

export const useGetJiraUsers = () => {
  const [fetchUsers, { loading, data }] = useLazyQuery(GET_USERS_FROM_CREDS);
  const getJiraUsers = async (
    baseUrl: string,
    token: string,
    username: string,
    userKey: string
  ) => {
    try {
      const result = await fetchUsers({
        variables: {
          baseurl: baseUrl,
          token,
          username,
          userKey,
        },
      });
      console.log(result);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  return getJiraUsers;
};

export const useCreateUsers = () => {
  const [createUser, { loading, data }] = useMutation(CREATE_USER_MUTATION);
  const createJiraUser = async (
    id: string,
    userName: string,
    projectId: string,
    role: string
  ) => {
    try {
      const result = await createUser({
        variables: {
          jiraData: [
            {
              id,
              name: userName,
              projectId,
              role,
            },
          ],
        },
      });
      console.log(result);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  return createJiraUser;
};
