import styled from "styled-components";

export const CheckoutContainer =styled.div`
   width: 55%;
   margin: 50px auto 0px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const CheckoutHeader =styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid darkgrey;
`

export const HeaderItem =styled.div`
    text-transform: uppercase;
    font-weight: bold;
    width: 23%;
    &:last-child{
      width: 10%;
    }
`

export const TotalPrice =styled.span`
    margin-top:30px;
    margin-left: auto;
    font-weight: bold;
`
