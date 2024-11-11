import { useAuth } from "@/components/Login/AuthProvider.tsx";
import { Navigate } from "react-router-dom";

// A Private Route component that only renders if the user is authenticated
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

// A Public Route component (for Login), prevents access if authenticated
export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/home" />;
    }

    return children;
};
