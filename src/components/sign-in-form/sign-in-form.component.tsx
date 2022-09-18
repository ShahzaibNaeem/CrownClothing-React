import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import FormInput from "../form-input/form-input.component";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer,Heading,SubHeading,ButtonsContainer, Form} from "./sign-in-form.styles";
import {ReactComponent as GoogleLogo} from "../../assets/google-logo.svg"
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";


const SignIn = () => {
   const dispatch =useDispatch();
     // ----SignIn with Email and password-------
    const defaultFormFields={
                        email:"",
                        password:""
                    }
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email,password}=formFields;

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target;
      setFormFields({...formFields,[name]:value})
    }
    
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     try {
        resetFormFields();
        dispatch(emailSignInStart(email,password))
     } catch (error) {
        alert(error)
     }
    }
    // ----SignIn with GooglePopup-------
    const logGoogleUser=()=>{
        dispatch(googleSignInStart())
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