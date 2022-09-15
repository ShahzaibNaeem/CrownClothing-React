import {legacy_createStore as createStore, applyMiddleware, compose, Middleware } from 'redux'
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer"
import { persistStore, persistReducer,PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './root-saga'

// ------------------------Types----------------------------
export type RootState=ReturnType<typeof rootReducer>
declare global{
   interface Window{
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
   }
}
type ExtendedPresistConfig=PersistConfig<RootState> & {
   whitelist : (keyof RootState)[]
}

// ------------------------Redux Store----------------------------
 const persistConfig:ExtendedPresistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
 }

const sagaMiddleware=createSagaMiddleware()
const persistedReducer=persistReducer(persistConfig,rootReducer)

                                                         //----filter((x)=>Boolean(x))
const middleWares=[process.env.NODE_ENV !== "production" && logger,sagaMiddleware].filter((middleware):middleware is Middleware=>Boolean(middleware)) 
const composedEnhancer=(process.env.NODE_ENV!=="production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers=composedEnhancer(applyMiddleware(...middleWares))


export const store=createStore(persistedReducer,undefined,composedEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor=persistStore(store)






