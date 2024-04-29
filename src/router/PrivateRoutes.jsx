
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user} = useAuth()
    const location = useLocation()

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children:PropTypes.node
};

export default PrivateRoutes;