import React, { useState } from "react";
import { Header } from "./components/header";
import ProjectApp from "./App";
import { PROJECT } from "./config/config";
import { createRoot } from "react-dom/client";
import "./output.css";

export const RootApp = () => {
  const [project, setProject] = useState<PROJECT>("STAR");

  return (
    <React.StrictMode>
      <div className="max-w-full mx-auto bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg  overflow-hidden">
        <Header onClick={setProject} />
        <ProjectApp project={project} />
      </div>
    </React.StrictMode>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<RootApp />);
}
