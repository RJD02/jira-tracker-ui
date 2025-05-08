// import { GET_PROJECTS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "@/api/grapqh";
import {
  AllProjectsQuery,
  AllProjectsQueryVariables,
} from "@/__generated__/graphql";

export function useProjects() {
  const result = useQuery<AllProjectsQuery, AllProjectsQueryVariables>(
    GET_ALL_PROJECTS
  );
  const data = result.data?.allProjects || [];
  return [data, result] as const;
}
