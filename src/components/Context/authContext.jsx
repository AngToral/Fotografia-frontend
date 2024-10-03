import { createContext, useContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('access_token'))
    const { decodedToken, isExpired } = useJwt(token);

    const userId = decodedToken?.id

    const setLogOut = () => {
        localStorage.removeItem('access_token')
        setToken(null)
    }

    useEffect(() => {
        if (isExpired) {
            setLogOut();
        }
    }, [isExpired, userId, token]);

    return (
        <AuthContext.Provider value={{ userId, isExpired, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}