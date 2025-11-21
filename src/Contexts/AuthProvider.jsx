import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Loading from "../Components/Loading/Loading";

const googlePrivider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)

  // Create User
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    .finally(() => setLoading(false));
  };

  // Sign User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    .finally(() => setLoading(false));
  };

  // Google SignIN
  const signInGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googlePrivider)
    .finally(() => setLoading(false));
  }

  // LogOut
  const LogOut =()=>{
    setLoading(true)
    return signOut(auth)
    .finally(() => setLoading(false));
  }

  // Update User Profile
  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }

  // observe user state
  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      });
      return ()=>{
        unSubscribe()
      }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    signInUser,
    signInGoogle,
    LogOut,
    updateUserProfile,
  };

  // if(loading){
  //   return <Loading></Loading>
  // }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;