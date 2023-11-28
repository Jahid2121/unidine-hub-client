import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.cofig";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  
  
  
  const logOut = () => {
      return signOut(auth);
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
              const userData = {email: currentUser.email}
              axiosPublic.post('/jwt', userData)
              .then(res => {
                if(res.data.token){
                  localStorage.setItem('access-token', res.data.token)
                }
              })
            }
            else{
              localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, [axiosPublic]);
    
    const updateUserProfile = (name, photoURL) => {
      
      return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
    }
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    googleLogin,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
