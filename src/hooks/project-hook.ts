import { GET_PROJECTS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";

export function useProjects() {
  const { data, loading } = useQuery(GET_PROJECTS);

  return {
    loading,
    projects: data?.projects || [],
  };
}
