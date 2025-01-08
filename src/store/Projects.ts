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
};

export const ProjectContext = createContext<ProjectType | undefined>(undefined);
