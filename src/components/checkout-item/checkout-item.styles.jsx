import styled,{css} from "styled-components";

const CheckoutItemWidth=css`
   width:23%;
`

export const CheckoutItemContainer=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 100px;
    padding: 15px 0px;
    border-bottom: 1px solid darkgray;
`

export const ImageContainer=styled.div`
    width: 23%;
    padding-right: 15px;  
`

export const Image=styled.img`
    width: 100%;
`

export const Name=styled.span`
    ${CheckoutItemWidth}
`

export const QuantityContainer=styled.span`
    ${CheckoutItemWidth}
    display: flex;
`
export const Arrow=styled.div`
    cursor: pointer;
`
export const Value=styled.div`
    margin:0px 10px;
`

export const Price=styled.span`
    ${CheckoutItemWidth}
`

export const Remove=styled.span`
    padding-left: 12px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
    color: red;
    }
`