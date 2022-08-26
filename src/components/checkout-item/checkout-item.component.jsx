import { useContext } from "react"
import { CartContext } from "../../context/cart.context";
import {CheckoutItemContainer,ImageContainer,Image,Name,QuantityContainer,Arrow,Value,Price,Remove} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const{name,imageUrl,price,quantity}=cartItem;
    const { addItemToCart,removeItemFromCart,clearItemFromCart} = useContext(CartContext);

    const addItemHandler=()=>{
       addItemToCart(cartItem);
    }
    const removeItemHandler=()=>{
      removeItemFromCart(cartItem);
    }
    const clearItemHandler=()=>{
      clearItemFromCart(cartItem);
    }

  return (
    <>
      <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
        <Name>{name}</Name>
        <QuantityContainer>
        <Arrow onClick={removeItemHandler} >&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </QuantityContainer>
        <Price>${price}</Price>
        <Remove onClick={clearItemHandler}>&#10005;</Remove>
      </CheckoutItemContainer> 
    </>
  )
}

export default CheckoutItem