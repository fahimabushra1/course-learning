import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { createContext, useEffect, useState} from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
 const auth = getAuth(app);

 const AuthProvider =({children})=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    const logOut =async ()=>{
        await signOut(auth);
        return setUser(null);
    }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            setLoading(false);
        }else{
            setLoading(false);
        }
    });
    return ()=>{
        return unsubscribe()
    }
  },[])


    const authInfo = {user,loading,googleLogin,createUser,signIn,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
 }

 export default AuthProvider;