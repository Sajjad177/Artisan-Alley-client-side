
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth';


export const AuthContext = createContext(null)

//social link :
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
        
    }
    

    // Sign in user :
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // googleProvider:
    const googleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        
    }

    // Git hub login :
    const gitHubLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    }

    //logout : 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }

    },[reload])

    const authInfo = {
        createUser,
        googleLogin,
        gitHubLogin,
        loginUser,
        user,
        loading,
        logOut,
        setReload
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