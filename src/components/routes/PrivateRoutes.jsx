import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../shared/LoadingSpinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <LoadingSpinner/>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;

}

export default PrivateRoutes;