//MiddleWare are chained curryfunctions in Redux
export const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type) next(action)
 
     console.log("type: " , action.type)
     console.log("payload: " , action.payload)
     console.log("currentState: " , store.getState())
 
     next(action)
     console.log("nextState:", store.getState())
 } 