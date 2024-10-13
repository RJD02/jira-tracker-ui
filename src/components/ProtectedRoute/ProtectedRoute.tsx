import { AuthContext } from "@/store/Auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const authContext = useContext(AuthContext);
    return authContext?.isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
