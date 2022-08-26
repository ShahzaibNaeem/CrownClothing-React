import styled, { css } from "styled-components"

const subColor="grey"
const mainColor="black"

const ShrinkLabelStyles=css`
    top:-14px;
    font-size: 12px;
    color: ${mainColor};
`

export const InputLabel=styled.label`
    color: ${subColor};
    font-size: 16px;
    text-transform: uppercase;
    pointer-events: none;
    position: absolute;
    left: 5px;
    top: 10px;
    transition: 0.3s ease all;
    ${({shrink})=>shrink && ShrinkLabelStyles};
   `

export const Input=styled.input`
        background:none;
        background-color: white;
        color: ${subColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${subColor};
        margin: 25px 0;
        &:focus{
            outline: none;
        }
        &:focus ~ ${InputLabel}{  /* symbol tilde(~) Subsequent-sibling Combinator */
          ${ShrinkLabelStyles}
        }

`

export const Group=styled.div`
    position: relative;
    margin:45px 0px;
     
    input[type="password"]{
     letter-spacing: 0.3em;
    }
`