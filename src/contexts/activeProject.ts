import { createContext, useContext } from "react";

interface ActiveProjectContextType {
  activeProject: string | null;
  setActiveProject: (project: string | null) => void;
}

export const ActiveProjectContext = createContext<ActiveProjectContextType>({
  activeProject: "STAR",
  setActiveProject: () => {},
});

export const useActiveProject = () => {
  const context = useContext(ActiveProjectContext);
  if (!context) {
    throw new Error(
      "useActiveProject must be used within an ActiveProjectProvider"
    );
  }
  return context;
};
