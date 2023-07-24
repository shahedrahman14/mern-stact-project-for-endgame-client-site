/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext(null)

const provider = new GoogleAuthProvider();

const GitHubProvider=new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [user,setUser]=useState(null)


  const signInWithGoogle= ()=>{
    return signInWithPopup(auth,provider)
  } 
  const signInWithGitHub= ()=>{
    return signInWithPopup(auth,GitHubProvider)
  } 

  const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
    
  }
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUserData =(user,name,photo)=>{
    updateProfile(user,{
      displayName:name,photoURL:photo
    })
  }
  const logOut=()=>{
    setLoading(true)
   return signOut(auth)
  }

  useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
      console.log('auth state chang');
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe()
    }
  },[])


  const authInfo={
    user,createUser,signIn,logOut,updateUserData,loading,signInWithGoogle,signInWithGitHub
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;