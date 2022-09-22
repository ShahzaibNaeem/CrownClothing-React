import { FC } from "react"
import { useNavigate } from "react-router-dom";
import Popup, { PopupProps } from "../popup/popup.component"
import { PopupData,PopupImage,PopupButton } from "./welcome-preview.styles";


type WelcomePreview={ 
  displayName:string;
  setIsPopupOpen:Function;
} & PopupProps

const WelcomePreview:FC<WelcomePreview> = ({isPopupOpen,setIsPopupOpen,displayName}) => {
    const navigate=useNavigate();
    const onClickHandler=()=>{
      setIsPopupOpen(false)
      navigate('/');
    }

  return (
    <Popup isPopupOpen={isPopupOpen} >  
         <PopupData>
            <h2>{`HI, ${displayName.toUpperCase()}!`}</h2>
            <p>Happy to see you Again</p>
            <PopupImage/>
         </PopupData>
          <PopupButton onClick={onClickHandler}>Go To HomePage</PopupButton>
      </Popup> 
  )
}

export default WelcomePreview