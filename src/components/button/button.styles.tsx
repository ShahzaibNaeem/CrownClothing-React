import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton=styled.button`
    padding: 10px 24px;
    color:white;
    background-color: rgb(24 24 29);
    border: none;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    max-width: auto;
    transition:all 0.3s ease 0s;
    &:hover,&:active{
        transform: scale(96%);   
    }
`
export const GoogleSignInButton=styled(BaseButton)`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: white;
        color: #4285f4;
        border: 1px solid #4285f4;
        font-weight: 700;

        &:hover,&:active{
        background-color: #4285f4;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
     }
   `
   export const HoverEffectButton=styled(BaseButton)`
        border:1px solid rgb(24 24 29);
        &:hover,&:active{
        background-color: white;
        border:1px solid rgb(24 24 29);
        color: rgb(24 24 29);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
   `
   export const HoverInvertedButton=styled(BaseButton)`
        background-color: white;
        color: rgb(24 24 29);
        border: 1px solid rgb(24 24 29);
       &:hover,&:active{
        background-color: rgb(24 24 29);
        color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
     }
   `

   export const ButtonSpinner=styled(SpinnerContainer)`
      width: 25px;
      height: 25px;
  `