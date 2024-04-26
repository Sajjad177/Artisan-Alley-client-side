
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../Firebase/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth/cordova';


export const AuthContext = createContext(null)

//social link :
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
        
    }
    // googleProvider:
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }

    // Sign in user :
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
        googleLogin,
        loginUser,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProviders.propTypes = {
    children:PropTypes.node
};

export default AuthProviders;