import React, { useState } from "react";
import { Header } from "./components/header";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./output.css";
import { ProjectApp } from "./ProjectApp";
import { client } from "./api/api";
import { ApolloProvider } from "@apollo/client";
import { PrivateRoute, PublicRoute } from "./routes/Routes";
import LoginPage from "./components/login/LoginPage";
import { AuthProvider } from "./components/login/AuthProvider";
import { AddProjectForm } from "./components/Projects/AddProject";

export const RootApp = () => {
    return (
        <React.StrictMode>
            <ApolloProvider client={client}>
                <AuthProvider>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PublicRoute>
                                        <LoginPage />
                                    </PublicRoute>
                                }
                            />
                            {/* Private route for dashboard (only accessible if authenticated) */}
                            <Route
                                path="/home"
                                element={
                                    <PrivateRoute>
                                        <AppContainer />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/add" element={
                                <PrivateRoute>
                                    <AddProjectForm />
                                </PrivateRoute>
                            } />
                        </Routes>
                    </Router>
                </AuthProvider>
            </ApolloProvider>
        </React.StrictMode>
    );
};

const AppContainer = () => {
    const [project, setProject] = useState<string | null>(null);

    return (
        <div className="max-w-full mx-auto bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg overflow-hidden">
            <Header onClick={setProject} activeProject={project} />
            {project && <ProjectApp project={project} />}
        </div>
    );
};

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<RootApp />);
}
