import React, { useState } from "react";
import { Header } from "./components/header";
import ProjectApp from "./App";
import { PROJECT } from "./config/config";
import { createRoot } from "react-dom/client";
// 
// 
// export const RootApp = () => {
//     const [project, setProject] = useState<PROJECT>("STAR");
// 
//     return (
//         <React.StrictMode>
//             <Header onClick={setProject} />
//             <ProjectApp project={project} />
//         </React.StrictMode>
//     );
// };

export const RootApp = () => {
    const [project, setProject] = useState<PROJECT>("STAR");

    return (
        <React.StrictMode>
            <Header onClick={setProject} />
            <ProjectApp project={project} />
        </React.StrictMode>
    );
};

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<RootApp />);
}

