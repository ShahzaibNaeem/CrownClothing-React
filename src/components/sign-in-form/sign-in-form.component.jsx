import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer,Heading,SubHeading,ButtonsContainer, Form} from "./sign-in-form.styles.jsx";
import {ReactComponent as GoogleLogo} from "../../assets/google-logo.svg"
import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


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
          await signInAuthUserWithEmailAndPassword(email,password);
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
        await signInWithGooglePopup();
     }

  return (
    <>
    <SignInContainer>
    <Heading>WELCOME BACK</Heading>
    <SubHeading>Sign in with email and password</SubHeading>

    <Form onSubmit={handleSubmit}>
    <FormInput label="email" type="email"  name="email" onChange={handleChange} value={email}   autoComplete="on" required/>
    <FormInput label="password" type="password"  name="password" minLength={4} onChange={handleChange} value={password} autoComplete="on"  required/>
    <ButtonsContainer>
     <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}> Sign In </Button>
     <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
     <GoogleLogo/> Google Sign In</Button>
     </ButtonsContainer>
    </Form>
    
    </SignInContainer>
    </>
  )
}

export default SignIn;