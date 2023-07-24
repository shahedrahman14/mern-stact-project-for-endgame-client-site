import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    if(loading){
        return <progress className="loading loading-spinner text-secondary text-4xl"></progress> 
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location }} replace={true}></Navigate>
};

export default PrivateRoutes;