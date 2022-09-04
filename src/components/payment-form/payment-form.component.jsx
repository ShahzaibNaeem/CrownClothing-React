import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"
import { useSelector } from "react-redux"

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { FormContainer, FormTitle, PaymentFormContainer } from "./payment-form.styles"


const PaymentForm = () => {
  const stripe=useStripe();
  const elements=useElements();
  const amount=useSelector(selectCartTotal)
  const currentUser=useSelector(selectCurrentUser)
  const cartItems=useSelector(selectCartItems)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler=async(e)=>{
     e.preventDefault();
     if(!stripe || !elements) return
     
     setIsProcessingPayment(true)

     const response=await fetch("/.netlify/functions/create-payment-intent",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({amount:amount*100})    //amount is in cents in Stripe
     }).then(res=>res.json())
     const {paymentIntent:{client_secret}}=response;

     const paymentResult=await stripe.confirmCardPayment(client_secret,{
      payment_method:{
        card:elements.getElement(CardElement),
        billing_details:{
          name:currentUser?currentUser.displayName:"Guest"
        }
      }
     })

     setIsProcessingPayment(false)

     if(paymentResult.error){
      alert(paymentResult.error.code)
     }
     else{
      if(paymentResult.paymentIntent.status==="succeeded"){
        alert("Payment successfull")
      }
     }
    }

  return (
    <> {cartItems.length ?
        <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
        <FormTitle>Credit Card Payment</FormTitle>
        <CardElement/>
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.hoverInverted}>Pay Now</Button>
        </FormContainer>
        </PaymentFormContainer>:
        " "
       } 
    </>
  )
}

export default PaymentForm