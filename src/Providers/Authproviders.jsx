import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export  const AuthContext=createContext(null);

const auth = getAuth(app);


const Authproviders = ({children}) => {

const [user,setuser]=useState(null);
const [loading,setLoading]=useState(true)
const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}
const signin =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const logout=()=>{
    return signOut(auth);
}

useEffect(()=>{
const unsubcribe= onAuthStateChanged(auth ,currentUser=>{
        console.log('user in the auth state changed',currentUser);
        setuser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubcribe();
    }
},[])

const authinfo ={loading,user,createUser,signin,logout}


    return (
       <AuthContext.Provider value={authinfo}>
{
    children
}
       </AuthContext.Provider>
    );
};

export default Authproviders;