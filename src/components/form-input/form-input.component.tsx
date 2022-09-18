import { FC, InputHTMLAttributes } from "react"
import {Group, Input, InputLabel} from "./form-input.styles"

type FormInputProps={
  label:string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput:FC<FormInputProps> = ({label,...otherprops}) => {
  return (
    <>
    <Group>
    <Input {...otherprops}/> 
    {label &&
    <InputLabel shrink={Boolean(otherprops.value && typeof(otherprops.value)==="string" && otherprops.value.length )}>{label}</InputLabel>
    }
    </Group>
    </>
  )
}

export default FormInput