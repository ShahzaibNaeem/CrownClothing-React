import { useContext, useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import ProductsCard from "../../components/products-card/products-card.component"
import { CategoriesContext } from "../../context/categories.context"
import "./category.styles.scss"

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
    <h2 className="category-title">{category}</h2>
    <div className="category-container">
      {products && 
        products.map((product)=> <ProductsCard key={product.id} product={product}/>)}
    </div>
    </>
  )
}

export default Category