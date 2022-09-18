import { BaseButton, ButtonSpinner, GoogleSignInButton, HoverEffectButton, HoverInvertedButton } from "./button.styles"
import "./button.styles"
import { ButtonHTMLAttributes, FC } from "react";

export enum BUTTON_TYPE_CLASSES{
   base='base',
   google="googleSignIn",
   hoverEffect="hoverEffect",
   hoverInverted="hoverInverted"
}

const getButton=(buttonType = BUTTON_TYPE_CLASSES.base):typeof BaseButton=>(
  {
    [BUTTON_TYPE_CLASSES.base]:BaseButton, 
    [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.hoverEffect]:HoverEffectButton,
    [BUTTON_TYPE_CLASSES.hoverInverted]:HoverInvertedButton
  }[buttonType]
)
export type ButtonProps={
   buttonType?:BUTTON_TYPE_CLASSES;
   isLoading?:boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>


const Button:FC<ButtonProps> = ({children,buttonType,isLoading,...otherProps}) => { 
  const CustomButton=getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
    {isLoading?<ButtonSpinner/>:children}
    </CustomButton>
  )
}
export default Button;