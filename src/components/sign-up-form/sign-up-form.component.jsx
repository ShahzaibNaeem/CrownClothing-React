import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {SignUpContainer,Heading,SubHeading,Form} from "./sign-up-form.styles";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignUp = () => {
  const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName,email,password,confirmPassword}=formFields;
  
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormFields({...formFields,[name]:value})
    }
    
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit=async(e)=>{
     e.preventDefault();
     if(password !== confirmPassword){
        alert("Password doesn't match");
        return;
     }
     try {
        resetFormFields();
        const {user}=await createAuthUserWithEmailAndPassword(email,password);
        await createUserDocumentFromAuth(user,{displayName});
     } catch (error) {
        if(error.code==="auth/email-already-in-use"){
            alert("Email already in use")
        }
        console.log(`error creating a user ${error.code}`)
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