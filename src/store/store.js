import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
// import logger from "redux-logger"
import { rootReducer } from "./root-reducer"

//MiddleWare are chained curryfunctions in Redux
const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type) next(action)
 
     console.log("type: " , action.type)
     console.log("payload: " , action.payload)
     console.log("currentState: " , store.getState())
 
     next(action)
     console.log("nextState:", store.getState())
 
 } 

const middleWares=[loggerMiddleware]
const composedEnhancers=compose(applyMiddleware(...middleWares))

export const store=createStore(rootReducer,undefined,composedEnhancers)
