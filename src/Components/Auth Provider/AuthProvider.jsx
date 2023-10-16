import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })
        return () => {
            Unsubscribe();
        }

    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
     
    const authInfo = {user, handleSignIn, createUser, setLoading};
    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;