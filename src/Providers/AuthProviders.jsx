
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
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
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

    },[])

    const authInfo = {
        createUser,
        googleLogin,
        gitHubLogin,
        loginUser,
        user,
        loading,
        logOut,
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