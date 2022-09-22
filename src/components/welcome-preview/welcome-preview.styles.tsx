import styled from "styled-components";
import {ReactComponent as JoyPopup} from "../../assets/joy-popup.svg"
import { BaseButton } from "../button/button.styles";

export const PopupData=styled.div`
   padding:30px 20px 30px 20px;
   display: flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   h2{
    font-size:26px;
   }
   p{
      margin-bottom:20px;
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
   

export const PopupImage=styled(JoyPopup)`
  width: 70%;
  height: 70%;
  display: block;
`

export const PopupButton=styled(BaseButton)`
    display: block;
    margin:auto;
    font-size:14px;
    width:100%;
    
   @media screen and (max-width:600px){
   font-size:12px;  
   }

`