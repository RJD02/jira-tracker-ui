import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

interface PrivateRouteProps {
  // Extend RouteProps to handle any props normally passed to <Route>
  component: React.ComponentType<any>;
  [key: string]: any; // Allow for any other props
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};
