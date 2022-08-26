import { useContext, useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import ProductsCard from "../../components/products-card/products-card.component"
import { CategoriesContext } from "../../context/categories.context"
import {CategoryTitle,CategoryContainer} from "./category.styles"

const Category = () => {
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
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