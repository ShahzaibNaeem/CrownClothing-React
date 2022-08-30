import { useSelector, useDispatch } from "react-redux/es/exports";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector"

import {CheckoutItemContainer,ImageContainer,Image,Name,QuantityContainer,Arrow,Value,Price,Remove} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const{name,imageUrl,price,quantity}=cartItem;
    const dispatch=useDispatch();
    const cartItems=useSelector(selectCartItems);

    const addItemHandler=()=>{
       dispatch(addItemToCart(cartItems, cartItem));
    }
    const removeItemHandler=()=>{
      dispatch(removeItemFromCart(cartItems, cartItem));
    }
    const clearItemHandler=()=>{
      dispatch(clearItemFromCart(cartItems, cartItem));
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