import { Middleware } from "redux"
import { RootState } from "../store"

//MiddleWare are chained curryfunctions in Redux
export const loggerMiddleware:Middleware<{},RootState>=(store)=>(next)=>(action)=>{
    if(!action.type) next(action)
 
     console.log("type: " , action.type)
     console.log("payload: " , action.payload)
     console.log("currentState: " , store.getState())
 
     next(action)
     console.log("nextState:", store.getState())
 } 



//Working of Thunk as a Middleware
//  export const thunkMiddleware=(store)=>(next)=>(action)=>{
//     if(typeof(action)==="function"){
//         next(dispatch)
//     }
//  }