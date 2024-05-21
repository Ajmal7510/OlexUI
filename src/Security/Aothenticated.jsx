import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AouthContext";



const AuthenticatedRoute = ({ children }) => {
    const authContext = useAuth();
    const navigate = useNavigate();

    if (authContext.isAuthenticated) {
        return children;
    } else {
       return <Navigate to={'/login'}/>
    }
}

export default AuthenticatedRoute