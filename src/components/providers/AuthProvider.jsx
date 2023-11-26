import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from "../../firebase/firebase.cofig";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser('user in the state', currentUser)
            setLoading(false)

        return   () => {
                unsubscribe()
            }
        })
    }, [])
    
    const authInfo = {
        user, 
        loading
    }

  return (
    <AuthContext.Provider value={authInfo}>
      <h2>  Welcome to AuthProvider </h2>
    </AuthContext.Provider>
  );
};

export default AuthProvider;