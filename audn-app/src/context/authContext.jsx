import { createContext, useContext, useState } from "react";
import { checkCredentials } from "../services/audn-API";

const authContext = createContext();

const useAuth = () => {
    const context = useContext(authContext)
    return context;
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (email, password) => {
        checkCredentials(email, password).then(data =>{
        if(data.token){
            setUser(data)
            localStorage.setItem('token', JSON.stringify(data))
        }
        });
    }
    const logout = () => {
        localStorage.removeItem('token')
        setUser(null);
      }
    return <authContext.Provider value={{ user, login, logout }}>{children}</authContext.Provider>;
}


export {AuthProvider, authContext, useAuth}



