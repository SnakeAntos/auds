import { createContext, useContext, useState } from "react";
import { checkCredentials } from "../services/audn-API";

const authContext = createContext();

const useAuth = () => {
    const context = useContext(authContext)
    return context;
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login =  async (email, password) => {
        const data = await checkCredentials(email, password)
        if(data.accessToken){
            console.log("Imprimiendo en consola")
            setUser(data)
            localStorage.setItem('accessToken', JSON.stringify(data));
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken')
        setUser(null);
      }
    return <authContext.Provider value={{ user, login, logout }}>{children}</authContext.Provider>;
}


export {AuthProvider, authContext, useAuth}



