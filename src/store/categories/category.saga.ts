import { takeLatest, all, call, put } from "typed-redux-saga/macro"
import { getCategoriesAndDocumnets } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess,fetchCategoriesFail } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";  

 
export function* fetchCategoriesAsync(){
    try {
        const categoryArray=yield* call(getCategoriesAndDocumnets)
        yield* put(fetchCategoriesSuccess(categoryArray))
    } catch (error) {
        yield* put(fetchCategoriesFail(error as Error))
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield* all([call(onFetchCategories)])
}