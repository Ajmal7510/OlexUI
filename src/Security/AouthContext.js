import { createContext, useContext, useState } from "react";
import axiosInstance from "../axios/axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const [state, setstate] = useState(0);

    const [user,setUser]=useState(null)

    const setStateValue=()=>{
        setstate(state+1)
    }
    
    const login = async (email, password) => {
        try {
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password
            });

            console.log(response);

            if (response.status === 200) {
                
                if (response.data !== "") {
                    setAuthenticated(true);
                    console.log(response.data);
                    setUser(response.data)
                    console.log(user);
                    console.log("Login successful");
                    return true;
                } else {
                  
                    console.log("Invalid username or password");
                    return false;
                }
            } else {
                
                console.log("Server error");
                return false;
            }
        } catch (error) {
           
            console.error("Error:", error);
            return false;
        }
    };

    const Signup = async (username, email, phoneNumber, password) => {
        try {
            const response = await axiosInstance.post('/signup', {
                username: username,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            });

           
            if (response.status === 201) {
            
                return true;
            } else {
                
                return false;
            }
        } catch (error) {
            
            console.error("Error:", error);
            return false;
        }
    };


    const logout=()=>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated,login, Signup,user,logout,state,setStateValue}}>
            {children}
        </AuthContext.Provider>
    );
}
