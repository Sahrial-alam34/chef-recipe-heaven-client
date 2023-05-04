/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle =  () =>{
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGithub = () =>{
        signInWithPopup(auth, githubAuthProvider)
    }

    const logOut = () =>{
        signOut(auth);
    }



    // observe auth state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           // console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo= {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        loading
      
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;