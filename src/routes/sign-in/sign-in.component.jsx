import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser=async()=>{
     const {user}=await signInWithGooglePopup();
     const userDocRef= await createUserDocumentFromAuth(user); //Async function
     console.log(userDocRef);
    }

  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>Sign with google Pop Up</button>
    </>
  )
}

export default SignIn