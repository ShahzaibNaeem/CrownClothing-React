import styled from "styled-components"
import { BaseButton,HoverInvertedButton,HoverEffectButton} from "../button/button.styles"


export const Image=styled.img`
    width: 100%;
    max-height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
`

export const ProductsCardContainer=styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;  

    ${BaseButton},${HoverInvertedButton},${HoverEffectButton}{
    position: absolute;
    width: 80%;
    top: 250px;
    opacity: 0.7;
    z-index: 20;  
    display: none;  
    }

    &:hover{
        ${Image}{
            opacity: 0.8;
        }
        ${BaseButton},${HoverInvertedButton},${HoverEffectButton}{
            display: flex;
            justify-content: center;
            opacity: 0.87;
        }
    }
`

export const ProductsCardFooter=styled.div`
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
`

export const Name=styled.span`
        width: 90%;
        margin-bottom: 15px;
`

export const Price=styled.span`
        width: 10%;

`