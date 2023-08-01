import { createContext, useContext, useState } from "react";
import { checkCredentials } from "../services/audn-API";

const authContext = createContext();

const useAuth = () => {
    const context = useContext(authContext)
    return context;
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null)
    const login =  async (email, password) => {
        const data = await checkCredentials(email, password)
        .then(data => {if(data.accessToken){
            setUser(data)
            localStorage.setItem('accessToken', JSON.stringify(data));
        } }) 
        .catch((error) => {
            console.log(error)
            setError(error);
          });
    };

    const logout = () => {
        localStorage.removeItem('accessToken')
        setUser(null);
      }
    return <authContext.Provider value={{ user, login, logout, error }}>{children}</authContext.Provider>;
}


export {AuthProvider, authContext, useAuth}



