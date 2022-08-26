import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { ProductsCardContainer, Image, ProductsCardFooter, Name, Price } from "./products-card.styles"

const ProductsCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  }
  
  return (
    <>
      <ProductsCardContainer>
        <Image src={imageUrl} alt={name} />
        <ProductsCardFooter>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </ProductsCardFooter>
        <Button buttonType={BUTTON_TYPE_CLASSES.hoverInverted} onClick={addProductToCart} >Add to cart</Button>
      </ProductsCardContainer>
    </>
  )
}

export default ProductsCard