/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from './../../Firebase/Firebase.config';
const auth=getAuth(app)
export const AuthContext=createContext(null)

const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [user,setUser]=useState(null)


  const signInWithGoogle= ()=>{
    return signInWithPopup(auth,provider)
  } 

  const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
    
  }
  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUserData =(user,name,photo)=>{
    updateProfile(user,{
      displayName:name,photoURL:photo
    })
  }
  const logOut=()=>{
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
    user,createUser,signIn,logOut,updateUserData,loading,signInWithGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;