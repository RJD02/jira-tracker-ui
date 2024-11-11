// src/context/AuthContext.jsx
import {
  LoginMutation,
  LoginMutationVariables,
  AuthUser,
} from "@/__generated__/graphql";
import { LOGIN_MUTATION } from "@/api/grapqh";
import { useMutation } from "@apollo/client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  setUser: (user: AuthUser) => void;
  setIsAuthenticated: (isAuth: boolean) => void;
}
// Create Auth Context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: { id: 1, username: "" },
  setUser: () => {},
  setIsAuthenticated: () => {},
});

// Custom hook for accessing auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export function useLogin() {
  const [loginMutation, { data, error, loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION);

  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (data && data.login) {
      const { token, user } = data.login;
      if (token) setIsAuthenticated(true);
      setUser(user);
    }
  }, [data]);

  // Function to log in (for testing, we'll simulate setting authentication)
  const login = async (username: string, password: string) => {
    const { data } = await loginMutation({
      variables: {
        username,
        password,
      },
    });
    const token = data?.login?.token;
    const user = data?.login?.user;
    if (token) {
      localStorage.setItem("token", token);
    }
    return { token, user };
  };
  return {
    login,
    data, // Response data from the login mutation
    error, // Error state (if any)
    loading, // Loading state
  };
}
// Auth Provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  // Function to log out
  // const logout = () => setIsAuthenticated(false);

  const value = {
    isAuthenticated,
    user,
    setUser,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
