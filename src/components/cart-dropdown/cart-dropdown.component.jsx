import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import Cartitem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext);
  return (
    <>  
        <div className="card-dropdown-container">
            <div className="cart-items" >
            {cartItems.map((cartItem)=>
            <Cartitem key={cartItem.id} {...cartItem}/>
            )}
            </div>
            <Button buttonType="hoverEffect">CHECKOUT</Button>
        </div>
    </>
  )
}

export default CartDropdown