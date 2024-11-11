import { useNavigate } from "react-router";
import { useAuth } from "../Login/AuthProvider";
import { Button } from "../ui/Button";

export default function Logout() {
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false); // Reset authentication state
        navigate("/"); // Redirect to login page
    };

    return <Button onClick={handleLogout}>Logout</Button>;
}
