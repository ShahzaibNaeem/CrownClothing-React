import styled from "styled-components"
import { BaseButton,HoverInvertedButton,HoverEffectButton } from "../button/button.styles"

export const CartDropdownContainer=styled.div`
    width: 240px;
    height: 340px;
    position: absolute;
    top: 90px;
    right: 40px;
    z-index: 50;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    ${BaseButton},${HoverInvertedButton},${HoverEffectButton}{
        margin-top:auto;
      }

    @media screen and (max-width:800px){
      width: 220px;
      height: 320px;
      top: 78px;
      right: 14px;
      ${BaseButton},${HoverInvertedButton},${HoverEffectButton}{
        font-size:14px;
      }
    }
`
export const CartItems=styled.div`
      height: 240px;
      display: flex;
      overflow-y: scroll;
      flex-direction: column;
      &::-webkit-scrollbar{
        width: 8px;
      }
      &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color:rgb(125, 129, 129);
       }
    `
export const EmptyMessage=styled.span`
       font-size: 18px;
       margin: 50px auto;

    @media screen and (max-width:800px){
        font-size: 15px;
    }
`

  
