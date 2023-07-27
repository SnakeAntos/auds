import { createContext, useContext } from "react";
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
    return <authContext.Provider value={{ user, login, logout }}>{children}</authContext.Provider>;
}




