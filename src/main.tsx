import React, { useState } from "react";
import { Header } from "./components/header";
import { PROJECT } from "./config/config";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./output.css";
import LoginPage from "./components/Login/Login";
import { PrivateRoute } from "./components/Protected/ProtectedRoute";
import ProjectApp from "./App";
import { AuthProvider } from "./contexts/AuthProvider";

export const RootApp = () => {
    const [project, setProject] = useState<PROJECT>("STAR");
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PrivateRoute component={ProjectApp} project={project} />,
        },
        {
            path: "/login",
            element: <LoginPage />
        }
    ])


    // <ProjectApp project={project} />
    return (
        <React.StrictMode>
            <div className="max-w-full mx-auto bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg  overflow-hidden">
                <Header onClick={setProject} />
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </div>
        </React.StrictMode>
    );
};

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<RootApp />);
}
