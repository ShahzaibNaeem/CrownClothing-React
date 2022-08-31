import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import logger from "redux-logger"
import thunk from 'redux-thunk'
import { rootReducer } from "./root-reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

 const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
 }

const persistedReducer=persistReducer(persistConfig,rootReducer)
                                                         //----filter((x)=>Boolean(x))
const middleWares=[process.env.NODE_ENV !== "production" && logger,thunk].filter(Boolean) 
const composedEnhancers=compose(applyMiddleware(...middleWares))

export const store=createStore(persistedReducer,undefined,composedEnhancers)
export const persistor=persistStore(store)






