import styled from "styled-components"
import {ReactComponent as PaymentPopup} from "../../assets/payment-popup.svg"

export const PopupData=styled.div`
   padding:30px 20px 20px 20px;
   display: flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   gap:5px;
   h2{
    margin-top:20px;
   }
   p{
     text-align:center;
     font-size:15px;
   }

@media screen and (max-width:600px){
    h2{
    font-size:22px;
   }
    p{
    font-size:14px;
   }
   }
`

export const PaymentImage=styled(PaymentPopup)`
  width: 70%;
  height: 70%;
  display: block;
`

export const HomeButton=styled.p`
text-align:center;
font-size:14px;
text-decoration:underline;
color:grey;
cursor: pointer;
margin-bottom:20px;

@media screen and (max-width:600px){
font-size:12px;  
}
 
`
