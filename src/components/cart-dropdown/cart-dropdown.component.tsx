import {useNavigate} from "react-router-dom";
import { useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Cartitem from "../cart-item/cart-item.component";
import { CartDropdownContainer,CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems=useSelector(selectCartItems);
  const navigate=useNavigate();
 
  const goToCheckoutHandler=useCallback(()=>{    // memoized callback function
    navigate('/checkout')  
  },[])

  return (
    <>  
        <CartDropdownContainer>
            <CartItems>
            {
              cartItems.length ? cartItems.map((cartItem)=>
            <Cartitem key={cartItem.id} {...cartItem}/>) :
            <EmptyMessage>Cart is Empty 🙂</EmptyMessage>
            }
            </CartItems>
  
            <Button buttonType={BUTTON_TYPE_CLASSES.hoverInverted} onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    </>
  )
}

export default CartDropdown