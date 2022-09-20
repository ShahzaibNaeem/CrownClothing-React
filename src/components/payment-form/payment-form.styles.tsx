import styled from "styled-components"
import { HoverInvertedButton } from "../button/button.styles"


export const FormTitle=styled.h2`
  text-align:center;
  text-transform:uppercase;
  @media screen and (max-width: 600px) {
    font-size:16px;
  }
`

export const FormContainer=styled.form`
  min-width:500px;
  border:1px solid rgba(170, 170, 170, 0.4);
  padding: 20px;
  margin:40px 0px;
  gap:40px;
  display: flex;
  flex-direction:column;

  ${HoverInvertedButton}{
  width:100%;
  }

  @media screen and (max-width: 600px) {
    min-width:320px;
    gap:30px;
    ${HoverInvertedButton}{
    font-size:14px;
    }
  }

  `