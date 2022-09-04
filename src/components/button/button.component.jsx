import { BaseButton, ButtonSpinner, GoogleSignInButton, HoverEffectButton, HoverInvertedButton } from "./button.styles"
import "./button.styles"

export const BUTTON_TYPE_CLASSES={
   base:'base',
   google:"googleSignIn",
   hoverEffect:"hoverEffect",
   hoverInverted:"hoverInverted"
}

const getButton=(buttonType = BUTTON_TYPE_CLASSES.base)=>(
  {
    [BUTTON_TYPE_CLASSES.base]:BaseButton,
    [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.hoverEffect]:HoverEffectButton,
    [BUTTON_TYPE_CLASSES.hoverInverted]:HoverInvertedButton
  }[buttonType]
)

const Button = ({children,buttonType,isLoading,...otherProps}) => { 
  const CustomButton=getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
    {isLoading?<ButtonSpinner/>:children}
    </CustomButton>
  )
}
export default Button;