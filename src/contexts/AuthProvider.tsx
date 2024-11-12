import { useState } from 'react';
import { AuthContext } from './auth';
import { AuthProviderProps } from './auth';

export const AuthProvider = (props: AuthProviderProps) => {
    const children = props.children
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}  {/* Render the children */}
        </AuthContext.Provider>
    );
};

