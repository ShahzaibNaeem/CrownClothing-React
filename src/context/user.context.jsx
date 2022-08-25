import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedlistener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
});


export const UserProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value={currentUser,setCurrentUser};

    useEffect(()=>{
          const unsubscribe= onAuthStateChangedlistener((user)=>{
            if(user){
                  createUserDocumentFromAuth(user); 
                }
            setCurrentUser(user);
          });  
          return unsubscribe;
          // eslint-disable-next-line
        },[])

    return  <UserContext.Provider value={value}>{children}</UserContext.Provider>
}