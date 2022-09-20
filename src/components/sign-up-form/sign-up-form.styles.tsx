import styled from "styled-components";
import { BaseButton, HoverInvertedButton, HoverEffectButton } from "../button/button.styles";

export const SignUpContainer=styled.div `
   display: flex;
   flex-direction: column;
   min-width: 350px;

   @media screen and (max-width:800px){
      width:70%;
       align-items: center;
       border: 0.1rem solid rgba(170, 170, 170, 0.4);
       padding: 10px 20px 25px 20px;
       margin:20px 0px;

    ${BaseButton},${HoverInvertedButton},${HoverEffectButton}{
      width:100%;
      font-size:16px;
   }
    }

    @media screen and (max-width:600px){
      min-width: 320px;
      padding: 5px 0 20px 0;
      ${BaseButton},${HoverInvertedButton},${HoverEffectButton}{
       font-size:14px;
     }
    }

`

export const Heading=styled.h2`
    margin:10px 0px;

    @media screen and (max-width:600px){
        font-size:22px;
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

