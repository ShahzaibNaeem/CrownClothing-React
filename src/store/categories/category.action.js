import { getCategoriesAndDocumnets } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducers/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart=()=>
       createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess=(categoriesArray)=>
       createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)

export const fetchCategoriesFail=(error)=>
       createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,error) 

//  -----------Thunk-middlewarefunction-----------      
export const fetchCategoriesAsync=()=>async(dispatch)=>{
       dispatch(fetchCategoriesStart())

       try {
       const categoriesArray=await getCategoriesAndDocumnets(); 
       dispatch(fetchCategoriesSuccess(categoriesArray))   
       } catch (error) {
       dispatch(fetchCategoriesFail(error))      
       }
}       



       