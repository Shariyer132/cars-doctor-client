import { useContext } from "react";
import { AuthContext } from "../pages/providers/AuthProviders";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return <h2>loading...</h2>
    }
    if (user?.email) {
        return children;
    }


    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;