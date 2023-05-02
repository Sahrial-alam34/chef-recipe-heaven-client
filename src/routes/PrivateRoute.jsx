/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
}
export default PrivateRoute;