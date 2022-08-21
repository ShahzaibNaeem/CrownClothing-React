import { useContext } from "react";
import ProductsCard from "../../components/products-card/products-card.component";
import {ProductsContext} from "../../context/products.context";
import "./shop.styles.scss";

const Shop = () => {
    const {products} =useContext(ProductsContext);

  return (
    <>
    <div className="products-container">
    {products.map((product)=>( 
        <ProductsCard key={product.id} {...product}/> 
    ))}
    </div>
    </>
  )
}

export default Shop