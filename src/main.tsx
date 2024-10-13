import React, { useState } from "react";
import { Header } from "./components/header";
import { createRoot } from "react-dom/client";
import "./output.css";
import { ProjectApp } from "./ProjectApp";
import { client } from "./api/api";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./components/Auth/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import { PrivateRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const RootApp = () => {
    return (
        <React.StrictMode>
            <ApolloProvider client={client}>
                <AppContainer />
            </ApolloProvider>
        </React.StrictMode>
    );
};

const AppContainer = () => {
    const [project, setProject] = useState<string | null>(null);

    const router = createBrowserRouter([
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/',
            element:
                <PrivateRoute>
                    <div className="max-w-full mx-auto bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg overflow-hidden">
                        <Header onClick={setProject} activeProject={project} />
                        {project && <ProjectApp project={project} />}
                    </div>
                </PrivateRoute>
        },

    ])



    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<RootApp />);
}
