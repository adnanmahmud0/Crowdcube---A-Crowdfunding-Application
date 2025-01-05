import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;