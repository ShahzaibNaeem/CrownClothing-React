import { useState ,useEffect} from "react"
import { useSelector } from "react-redux"
import {selectCategoriesMap} from "../../store/categories/category.selector"

import { useParams } from "react-router-dom"
import ProductsCard from "../../components/products-card/products-card.component"
import {CategoryTitle,CategoryContainer} from "./category.styles"

const Category = () => {
    const {category}=useParams();
    const categoriesMap=useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
      setProducts(categoriesMap[category]);
      window.scrollTo({top:0,left:0,behavior:"smooth"})
    }, [category,categoriesMap])

  return (
    <>  
    <CategoryTitle>{category}</CategoryTitle>
    <CategoryContainer>
      {products && 
        products.map((product)=> <ProductsCard key={product.id} product={product}/>)}
    </CategoryContainer>
    </>
  )
}

export default Category