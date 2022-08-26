import { CartItemContainer, CartItemDetails, CartItemImage, Name,Price } from "./cart-item.styles";

const Cartitem = ({ name, imageUrl, price, quantity }) => {
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
}

export default Cartitem