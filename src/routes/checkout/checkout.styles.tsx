import styled from "styled-components";

export const CheckoutContainer =styled.div`
   width: 60%;
   margin: 50px auto 0px;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media screen and (max-width: 900px) {
    width: 95%;
  }
   @media screen and (max-width: 600px) {
    margin: 10px auto 0px;
  }
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
    @media screen and (max-width: 800px) {
    font-size:15px;
  }
    @media screen and (max-width: 600px) {
    font-size:11px;
  }
    @media screen and (max-width: 485px) {
    &:nth-child(4){
        width: unset;
    }
  }
`

export const TotalPrice =styled.span`
    margin-top:30px;
    margin-left: auto;
    font-weight: bold;

    @media screen and (max-width: 600px) {
    font-size:14px;
  }
`
