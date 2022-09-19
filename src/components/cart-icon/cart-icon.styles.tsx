import styled from "styled-components"
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer=styled.div`
    height: 40px;
    width: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width:600px){
      height: 30px;
      width: 30px;
    }
`

export const ShoppingIcon=styled(ShoppingSvg)`
    width: 30px;   
`

export const ItemCount=styled.div`
    position: absolute;
    font-size: 13px;
    bottom: 7.5px;

    @media screen and (max-width:600px){
    font-size: 12px;
    bottom: 3.5px;
    }
`
    