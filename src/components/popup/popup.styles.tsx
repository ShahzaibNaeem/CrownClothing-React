import styled from "styled-components";

export const PopupBackground=styled.div`
   position: fixed;
   top:0;
   left:0;
   z-index: 20;
   width: 100%;
   height: 100vh;
   background:rgba(0, 0, 0, 0.2);
   display:flex;
   justify-content:center;
   align-items:center;
`
export const PopupContainer=styled.div`
   background-color:#fff;
   width: 100%;
   max-width: 500px;

   @media screen and (max-width:600px){
   max-width:unset;  
   }

`
