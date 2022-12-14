import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap =useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  return (
    <>  
    { isLoading ? <Spinner/> :
        Object.keys(categoriesMap).map((title)=>{
          const products=categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products}/>
        }) 
    }   
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