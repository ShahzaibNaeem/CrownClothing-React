import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import FormInput from "../form-input/form-input.component";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer,Heading,SubHeading,ButtonsContainer, Form} from "./sign-in-form.styles";
import {ReactComponent as GoogleLogo} from "../../assets/google-logo.svg"
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import WelcomePreview from "../welcome-preview/welcome-preview.component";


const SignIn = () => {
   const dispatch =useDispatch();
   const currentUser=useSelector(selectCurrentUser);
   const displayName=currentUser?.displayName;

   const [isPopupOpen, setIsPopupOpen]=useState(false);

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
        dispatch(emailSignInStart(email,password));
        setIsPopupOpen(true);
     } catch (error) {
        alert(error)
     }
    }
    // ----SignIn with GooglePopup-------
    const logGoogleUser=()=>{
        dispatch(googleSignInStart())
        setIsPopupOpen(true);
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
     {
      isPopupOpen && displayName &&
      <WelcomePreview isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} displayName={displayName}/>
     }
      <span> </span>
     <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
     <GoogleLogo/> Google Sign In</Button>
     </ButtonsContainer>
    </Form>
    
    </SignInContainer>
    </>
  )
}

export default SignIn;