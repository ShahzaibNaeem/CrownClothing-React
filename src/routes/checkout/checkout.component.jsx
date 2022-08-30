import { useSelector } from "react-redux/es/exports";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer,CheckoutHeader,HeaderItem,TotalPrice} from "./checkout.styles"

const CheckOut = () => {
    const cartItems=useSelector(selectCartItems)
    const cartTotal=useSelector(selectCartTotal)
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