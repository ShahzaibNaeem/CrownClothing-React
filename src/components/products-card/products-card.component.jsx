import { useDispatch, useSelector } from "react-redux/es/exports";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { ProductsCardContainer, Image, ProductsCardFooter, Name, Price } from "./products-card.styles"

const ProductsCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch=useDispatch();
  const cartItems=useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems,product))
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