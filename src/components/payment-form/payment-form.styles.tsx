import styled from "styled-components"
import { HoverInvertedButton } from "../button/button.styles"

export const PaymentFormContainer=styled.div`
  height: 230px;
  display: flex;
  flex-direction:column;
  align-items:center;
  border:1px solid rgba(170, 170, 170, 0.4);
  padding: 20px;
  margin:40px 0px;
  border-radius:2px;
`
export const FormTitle=styled.h2`
  text-align:center;
  text-transform:uppercase;
`

export const FormContainer=styled.form`
  height:100px;
  min-width:500px;
  gap:40px;
  display: flex;
  flex-direction:column;

  ${HoverInvertedButton}{
  width:100%;
  }
  `