import styled from "styled-components";
import { BaseButton,HoverEffectButton,HoverInvertedButton,GoogleSignInButton } from "../button/button.styles";


export const SignInContainer=styled.div `
   display: flex;
   flex-direction: column;
   min-width: 350px;

   @media screen and (max-width:930px){
    width: 40%;
    }

   @media screen and (max-width:800px){
       width:70%;
       align-items: center;
       border: 0.1rem solid rgba(170, 170, 170, 0.4);
       padding: 10px 20px 25px 20px;
       margin:20px 0px;
    }
   @media screen and (max-width:600px){
      padding: 5px 0 20px 0;
      min-width: 320px;
    }
   
`
export const Heading=styled.h2`
    margin:10px 0px;
    @media screen and (max-width:600px){
        font-size:22px;
    }
`
export const ButtonsContainer=styled.div`
   display: flex;
   justify-content: space-between;
   gap: 30px;

   @media screen and (max-width:930px){
      ${BaseButton},${HoverInvertedButton},${HoverEffectButton},${GoogleSignInButton}{
      font-size:16px;
      padding: 10px 10px;
   }
    }
 
   @media screen and (max-width:800px){
   flex-direction:column;
   text-align:center;
   gap:15px;
   span::after{
      content:"Or";
      color:grey;
   }
   ${BaseButton},${HoverInvertedButton},${HoverEffectButton},${GoogleSignInButton}{
      font-size:16px;
      padding: 10px 24px;
   }
    }

    @media screen and (max-width:600px){
      ${BaseButton},${HoverInvertedButton},${HoverEffectButton},${GoogleSignInButton}{
       font-size:14px;
     }
    }
`

export const SubHeading=styled.span`
     @media screen and (max-width:800px){
        font-size:14px;
    }
     @media screen and (max-width:800px){
        font-size:13px;
    }
`

export const Form=styled.form`
    @media screen and (max-width:800px){
       width: 80%
   }
`

