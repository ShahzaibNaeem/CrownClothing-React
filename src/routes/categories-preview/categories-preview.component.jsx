import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
    const {categoriesMap} =useContext(CategoriesContext);

  return (
    <>
        { Object.keys(categoriesMap).map((title)=>{
          const products=categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products}/>
        }) }
    </>
  )
}

export default CategoriesPreview;









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