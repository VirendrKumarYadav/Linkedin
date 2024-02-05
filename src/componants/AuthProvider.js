import React, { useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { onLog } from "firebase/app";


const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sign_out = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    console.log("google sign");
    return signInWithPopup(auth, provider)
  
}
  



  const value = {
    currentUser,
    setCurrentUser,
    signup,
    signIn,
    sign_out,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
export default AuthProvider;
