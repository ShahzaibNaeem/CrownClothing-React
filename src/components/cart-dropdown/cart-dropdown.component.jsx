import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {useNavigate} from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import Cartitem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext);
   
  const navigate=useNavigate();
  const goToCheckoutHandler=()=>{
    navigate('/checkout')
  }

  return (
    <>  
        <div className="card-dropdown-container">
            <div className="cart-items" >
            {cartItems.map((cartItem)=>
            <Cartitem key={cartItem.id} {...cartItem}/>
            )}
            </div>
            <Button buttonType="hoverEffect" onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    </>
  )
}

export default CartDropdown