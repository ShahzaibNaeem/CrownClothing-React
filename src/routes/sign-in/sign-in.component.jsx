import SignUp from "../../components/sign-up-form/sign-up-form.component";
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser=async()=>{
     const {user}=await signInWithGooglePopup();
     const userDocRef= await createUserDocumentFromAuth(user); 
    }
   
  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>Sign with google Pop Up</button>
    <SignUp/>
    </>
  )
}

export default SignIn









// For Google FireBase SignIn Redirect:

// import { getRedirectResult} from "firebase/auth";
// import {auth, signInWithGoogleRedirect, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

// // UseEffect used bcz signInwithGoogleRedirect remounts whole app we are unable to keep track user 
// useEffect(() => {     
//   (async()=>{
//     const response = await  getRedirectResult(auth);
//     if(response){
//       const userDocRef= await createUserDocumentFromAuth(response.user)
//     }
//   })();
//  }, [])
/* <button onClick={signInWithGoogleRedirect}>Sign with google Pop Up</button> */
