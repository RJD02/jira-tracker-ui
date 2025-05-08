import React from "react";
import { Header } from "./components/header";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./output.css";
import { ProjectApp } from "./ProjectApp";
import { client } from "./api/api";
import { ApolloProvider } from "@apollo/client";
import { PrivateRoute, PublicRoute } from "./routes/Routes";
import LoginPage from "./components/Login/LoginPage";
import { AuthProvider } from "./components/Login/AuthProvider";
import { ActiveProjectProvider } from "./contexts/ActiveProjectProvider";

export const RootApp = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <AuthProvider>
          <ActiveProjectProvider>
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
              </Routes>
            </Router>
          </ActiveProjectProvider>
        </AuthProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
};

const AppContainer = () => {
  return (
    <div className="max-w-full mx-auto bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg overflow-hidden">
      <Header />
      <ProjectApp />
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<RootApp />);
}
