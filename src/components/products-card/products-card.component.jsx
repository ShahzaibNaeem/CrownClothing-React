import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component"
import "./products-card.styles.scss"

const ProductsCard = ({product}) => {
  const {name,imageUrl,price}=product;
  const {addItemToCart}=useContext(CartContext);

  const addProductToCart=()=>{
    addItemToCart(product);
  }
  return (
    <>
        <div className="container products-card-container">
            <img src={imageUrl} alt={name} />
            <div className="products-card-footer">
                <span className="footer-name">{name}</span>
                <span className="footer-price">{price}</span>
            </div>
            <Button buttonType="hoverInverted" onClick={addProductToCart} >Add to cart</Button>
        </div>
    </>
  )
}

export default ProductsCard