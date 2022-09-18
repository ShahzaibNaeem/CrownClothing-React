import { useState ,useEffect} from "react"
import { useSelector } from "react-redux"
import {selectCategoriesMap, selectIsCategoriesLoading} from "../../store/categories/category.selector"

import { useParams } from "react-router-dom"
import ProductsCard from "../../components/products-card/products-card.component"
import {CategoryTitle,CategoryContainer} from "./category.styles"
import Spinner from "../../components/spinner/spinner.component"

type CategoryRouteParams={
  category:string;
}

const Category = () => {
    const {category}=useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap=useSelector(selectCategoriesMap);
    const isLoading=useSelector(selectIsCategoriesLoading);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
      setProducts(categoriesMap[category]);
      window.scrollTo({top:0,left:0,behavior:"smooth"})
    }, [category,categoriesMap])

  return (
    <>  
    <CategoryTitle>{category}</CategoryTitle>
     {
     isLoading ? <Spinner/> :
      <CategoryContainer>
      {products && 
        products.map((product)=> <ProductsCard key={product.id} product={product}/>)}
    </CategoryContainer>
    }
    
    </>
  )
}

export default Category