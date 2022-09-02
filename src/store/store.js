import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import logger from "redux-logger"
import { rootReducer } from "./root-reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './root-saga'

 const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
 }

const sagaMiddleware=createSagaMiddleware()
const persistedReducer=persistReducer(persistConfig,rootReducer)
                                                         //----filter((x)=>Boolean(x))
const middleWares=[process.env.NODE_ENV !== "production" && logger,sagaMiddleware].filter(Boolean) 
const composedEnhancers=compose(applyMiddleware(...middleWares))

export const store=createStore(persistedReducer,undefined,composedEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor=persistStore(store)






