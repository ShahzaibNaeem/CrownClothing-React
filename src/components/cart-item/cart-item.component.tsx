import { FC, memo } from "react";
import { CartItem } from "../../store/cart/cart.types";
import { CartItemContainer, CartItemDetails, CartItemImage, Name,Price } from "./cart-item.styles";

const Cartitem:FC<CartItem> = memo(({ name, imageUrl, price, quantity }) => {
  return (
    <>
      <CartItemContainer>
        <CartItemImage src={imageUrl} alt={name} />

        <CartItemDetails>
          <Name>{name}</Name>
          <Price>{quantity} x ${price}</Price>
        </CartItemDetails>
      </CartItemContainer>
    </>
  )
})

export default Cartitem