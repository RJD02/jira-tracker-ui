import { createContext } from "react";

export type ProjectType = {
  projects: {
    id: string;
    name: string;
    key: string;
  }[];
  username: string;
  token: string;
  email: string;
  baseUrl: string;
  projectId: string;
};

export const ProjectContext = createContext<ProjectType | undefined>(undefined);

export const useProjectContext = () => {
  const context = ProjectContext;
  if (context === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
