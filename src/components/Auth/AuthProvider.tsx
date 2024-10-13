import { useAuth } from "@/hooks/auth-hook";
import { AuthContext } from "@/store/Auth";
import { useEffect, useState } from "react";


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log('is loading', loading)
        const localToken = localStorage.getItem("token");
        const localUser = localStorage.getItem("username");
        if (localToken) {
            setToken(localToken);
            setUser(localUser);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, [])

    const login = async (username: string, password: string) => {

        const { data, message, response } = await useAuth(username, password);
        if (response === 200) {
            setToken(data.token);
            setUser(data.user);
            setIsAuthenticated(true)
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
        setIsAuthenticated(false)
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        return true;
    };

    return (
        <AuthContext.Provider value={{ loading, isAuthenticated, login, logout, token, user }}>
            {children}
        </AuthContext.Provider>

    )
}

