// import { createContext, useContext, useEffect, useState } from "react";
// import { useJwt } from "react-jwt";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(localStorage.getItem('access_token'))
//     const { decodedToken, isExpired } = useJwt(token);

//     const userId = decodedToken?.id

//     const setLogOut = () => {
//         localStorage.removeItem('access_token')
//         setToken(null)
//     }

//     const setLogIn = (login) => {
//         localStorage.setItem('access_token', login)
//         console.log("login ok: ", login, "token falta (null): ", token)
//         //sí recibe el login (response) al logearse
//         //no guarda el token en token cuando inicio sesión, pero si hago setToken(login/localStorage), se vuelve null al redireccionar
//     }

//     useEffect(() => {
//         console.log(token);
//         if (isExpired) {
//             setLogOut();
//         }
//     }, [isExpired, userId, token]);

//     return (
//         <AuthContext.Provider value={{ userId, isExpired, token, setLogIn }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => {
//     return useContext(AuthContext);
// }