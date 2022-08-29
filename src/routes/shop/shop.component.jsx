import { useEffect } from "react";
import {Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux"

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocumnets } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    const getCategoriesMap=async()=>{
      const categoriesArray=await getCategoriesAndDocumnets();
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
    // eslint-disable-next-line
    }, [])  

  return (
    <>
     <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
     </Routes>
    </>
  )
}

export default Shop;









// For Single page Rendring of categoryMap products
// { Object.keys(categoriesMap).map((title)=>
//   <Fragment key={title}>
//   <h2>{title}</h2>
//   <div className="products-container">
//   {categoriesMap[title].map((product)=>( 
//       <ProductsCard key={product.id} product={product}/> 
//   ))} 
//   </div>
//   </Fragment>
// ) }