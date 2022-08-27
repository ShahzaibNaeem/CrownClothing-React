import { createContext,useReducer,useEffect } from "react";
import { onAuthStateChangedlistener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducers/reducer.util";

export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
});

export const USER_ACTION_TYPES={
  SET_CURRENT_USER:"SET_CURRENT_USER"
}

const userReducer=(state,action)=>{
  const {type,payload}=action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
        ...state,currentUser:payload
      }
    default:
      throw new Error(`Unhandled type in ${type} in useReducer`)
  }
}

const INITIAL_STATE={
  currentUser:null
}

export const UserProvider=({children})=>{
  const [{currentUser}, dispatch] = useReducer(userReducer,INITIAL_STATE)

  const setCurrentUser=(user)=>{
  dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
  }
   
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