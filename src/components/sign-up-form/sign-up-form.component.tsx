import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {SignUpContainer,Heading,SubHeading,Form} from "./sign-up-form.styles";

const defaultFormFields={
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
}

const SignUp = () => {
  const dispatch=useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName,email,password,confirmPassword}=formFields;
  
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target;
      setFormFields({...formFields,[name]:value})
    }
    
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     if(password !== confirmPassword){
        alert("Password doesn't match");
        return;
     }
     try {
        resetFormFields();
        dispatch(signUpStart(email,password,displayName))
     } catch (error) {
        if((error as AuthError).code===AuthErrorCodes.EMAIL_EXISTS){
            alert("email already in use")
        }
        console.log(`user creation encountered an error ${(error as AuthError).code}`)
     }
    }

  return (
    <>
    <SignUpContainer>
    <Heading>Don't have an account?</Heading>
    <SubHeading>Sign up with your email and password</SubHeading>

    <Form onSubmit={handleSubmit}>
    <FormInput label="Display Name" type="text"  name="displayName" onChange={handleChange} value={displayName} autoComplete="off" required/>
    <FormInput label="email" type="email"  name="email" onChange={handleChange} value={email}  autoComplete="off" required/>
    <FormInput label="password" type="password"  name="password" minLength={4} onChange={handleChange} value={password} autoComplete="off" required/>
    <FormInput label="Confirm Password" type="password" name="confirmPassword" minLength={4} onChange={handleChange} value={confirmPassword} autoComplete="off" required/>  
     <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.hoverEffect}>Sign Up</Button>
    </Form>
    
    </SignUpContainer>
    </>
  )
}

export default SignUp