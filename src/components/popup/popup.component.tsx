import { FC, HTMLAttributes } from "react"
import { PopupBackground, PopupContainer } from "./popup.styles"

export type PopupProps={
  isPopupOpen:boolean;
} & HTMLAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLParagraphElement>

const Popup:FC<PopupProps> = ({children,isPopupOpen}) => {
 
  return (
    <> 
    { isPopupOpen &&
        <PopupBackground>
         <PopupContainer>
          {children}
         </PopupContainer>
        </PopupBackground>
    }
    </>
  )
}

export default Popup