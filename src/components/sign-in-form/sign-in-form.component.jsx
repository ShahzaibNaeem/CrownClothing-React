import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import {ReactComponent as GoogleLogo} from "../../assets/google-logo.svg"
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
     // ----SignIn with Email and password-------
    const defaultFormFields={
                        email:"",
                        password:""
                    }
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email,password}=formFields;

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormFields({...formFields,[name]:value})
    }
    
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit=async(e)=>{
     e.preventDefault();
     try {
        resetFormFields();
         const {user}= await signInAuthUserWithEmailAndPassword(email,password);
     } catch (error) {
        switch (error.code) {
          case ("auth/user-not-found"):
            alert("no user associated with this email") 
            break;
            case("auth/wrong-password"):
            alert("incorrect password")
            break;
          default:
            console.log(error);
            break;
        }
     }
    }
    // ----SignIn with GooglePopup-------
    const logGoogleUser=async()=>{
      const {user}=await signInWithGooglePopup();
     }

  return (
    <>
    <div className="sign-in-container">
    <h2>WELCOME BACK</h2>
    <span>Sign in with email and password</span>

    <form onSubmit={handleSubmit}>
    <FormInput label="email" type="email"  name="email" onChange={handleChange} value={email}   autoComplete="on" required/>
    <FormInput label="password" type="password"  name="password" minLength={4} onChange={handleChange} value={password} autoComplete="on"  required/>
    <div className="buttons-container">
     <Button type="submit">Sign In</Button>
     <Button type="button" buttonType="google" onClick={logGoogleUser}>
     <GoogleLogo/> Google Sign In</Button>
     </div>
    </form>
    
    </div>
    </>
  )
}

export default SignIn;