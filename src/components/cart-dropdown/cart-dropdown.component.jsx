import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <>
        <div className="card-dropdown-container">
            <div className="cart-items" />
            <Button buttonType="hoverEffect">CHECKOUT</Button>
        </div>
    </>
  )
}

export default CartDropdown