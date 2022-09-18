import styled from "styled-components";

export const SpinnerOverlay=styled.div`
   width: 100%;
   height: 60vh;
   display: flex;
   justify-content: center;
   align-items: center;
`  
export const SpinnerContainer=styled.div`
  width:50px;
  height:50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius:50%;
  border-top-color:#636767;
  display: inline-block;
  animation:spin 1s ease-in-out 0s infinite;
  @keyframes spin {
    from{
      transform: rotate(0deg);
    }
    to{
      transform:rotate(360deg)
    }
  }
  `
