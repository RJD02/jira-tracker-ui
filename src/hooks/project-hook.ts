// import { GET_PROJECTS } from "@/api/grapqh";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "@/api/grapqh";

export function useProjects() {
  const { data, loading } = useQuery(GET_ALL_PROJECTS);


  return {
    loading,
    projects: data?.allProjects || [],
  };
}
