import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"

const Authentication = () => {
  return (
    <>
    <div className="container authentication-container">
    <SignIn/>
    <SignUp/>
    </div>
    </>
  )
}

export default Authentication;









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
