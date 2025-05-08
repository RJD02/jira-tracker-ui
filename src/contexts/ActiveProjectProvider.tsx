import { ReactNode, useState } from "react";
import { ActiveProjectContext } from "./activeProject";

export const ActiveProjectProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <ActiveProjectContext.Provider value={{ activeProject, setActiveProject }}>
      {children}
    </ActiveProjectContext.Provider>
  );
};
