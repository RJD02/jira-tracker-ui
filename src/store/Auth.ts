import { createContext } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    login: (user: string, token: string) => Promise<boolean>;
    logout: () => boolean;
    token: string | null;
    user: string | null;
    loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

