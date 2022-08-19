import "./button.styles.scss"

const BUTTON_TYPE_CLASSES={
   google:"google-sign-in",
   hoverEffect:"hoverEffect",
   hoverInverted:"hoverInverted"
}

const Button = ({children,buttonType,...otherProps}) => { 
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}
export default Button;