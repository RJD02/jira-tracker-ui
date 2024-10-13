import { useAuth } from "@/hooks/auth-hook";
import { AuthContext } from "@/store/Auth";
import { useState } from "react";


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = async (username: string, password: string) => {
        const { data, message, response } = await useAuth(username, password);
        if (response === 200) {
            setToken(data.token);
            setUser(data.user);
            setIsAuthenticated(!!token)
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            return true;
        } else {
            console.log(message);
            return false;
        }
    }




    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        return true;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, token, user }}>
            {children}
        </AuthContext.Provider>

    )


}

