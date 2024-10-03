import React, { useState } from "react";
import { Header } from "./components/header";
import { PROJECT } from "./config/config";
import { createRoot } from "react-dom/client";
import LoginPage from "./components/Login/Login";
import { PrivateRoute } from "./components/Protected/ProtectedRoute";
import ProjectApp from "./App";
import { AuthProvider } from "./contexts/AuthProvider";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./output.css";
import { ProjectApp } from "./ProjectApp";
import { client } from "./api/api";
import { ApolloProvider } from "@apollo/client";

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
            path: "/",
            element: project && <PrivateRoute component={ProjectApp} project={project} />,
        },
        {
            path: "/login",
            element: <LoginPage />
        }
    ])


    // <ProjectApp project={project} />
    return (
            <div className="max-w-full mx-auto bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg  overflow-hidden">
                <Header onClick={setProject} />
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </div>
    );
  
};

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<RootApp />);
}
