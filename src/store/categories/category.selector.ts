import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoriesReducer=(state:RootState):CategoriesState=>state.categories;

export const selectCategories=createSelector(
     [selectCategoriesReducer],
     (categoriesSlice)=> categoriesSlice.categories
)

export const selectCategoriesMap=createSelector(
     [selectCategories],
     (categories)=> 
              categories.reduce((accum,category)=>{
               const {title, items}=category
               accum[title.toLowerCase()]=items
               return accum
               },{} as CategoryMap)  
)

export const selectIsCategoriesLoading=createSelector(
     [selectCategoriesReducer],
     (categoriesSlice)=>categoriesSlice.isLoading
)





  