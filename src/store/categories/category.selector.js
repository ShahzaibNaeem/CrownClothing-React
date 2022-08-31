import { createSelector } from "reselect";

const selectCategoriesReducer=(state)=>state.categories;

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
               },{})  
)

export const selectIsCategoriesLoading=createSelector(
     [selectCategoriesReducer],
     (categoriesSlice)=>categoriesSlice.isLoading
)





  