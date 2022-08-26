import { useContext } from "react"
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context"
import {CheckoutContainer,CheckoutHeader,HeaderItem,TotalPrice} from "./checkout.styles"

const CheckOut = () => {
    const { cartItems,cartTotal } = useContext(CartContext);
    return (
        <>
        <CheckoutContainer>
            <CheckoutHeader>
            <HeaderItem> Product </HeaderItem>
            <HeaderItem> Description </HeaderItem>
            <HeaderItem> Quantity </HeaderItem>
            <HeaderItem> Price </HeaderItem>
            <HeaderItem> Remove </HeaderItem>
            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}

         <TotalPrice>TOTAL: ${cartTotal}</TotalPrice>
        </CheckoutContainer>
        </>
    )
}

export default CheckOut