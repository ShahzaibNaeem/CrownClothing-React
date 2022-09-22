import { FC } from "react"
import { useNavigate } from "react-router-dom";
import Popup from "../popup/popup.component"
import { HomeButton, PaymentImage, PopupData } from "./paymentsuccess-preview.styles";

type PaymentSuccessProps={
    isPopupOpen:boolean;
    setIsPopupOpen:Function;
}


const PaymentSuccess:FC<PaymentSuccessProps> = ({isPopupOpen,setIsPopupOpen}) => {
  const navigate =useNavigate();

  const onClickHandler=()=>{
    setIsPopupOpen(false)
    navigate("/")
  }

  return (
    <>
    <Popup isPopupOpen={isPopupOpen}>
        <PopupData>
          <PaymentImage/>
            <h2>Payment Successfull</h2>
            <p>we are delighted to inform you that we have recieved your payment</p>
        </PopupData>
        <HomeButton onClick={onClickHandler}>Back To Homepage</HomeButton>
    </Popup>
    </>
  )
}

export default PaymentSuccess