import { AuthContext } from "@/store/Auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    if (authContext.loading == true) {
        return <div>Loading...</div>
    }

    return authContext.isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
