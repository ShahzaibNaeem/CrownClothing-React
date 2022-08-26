import {Group, Input, InputLabel} from "./form-input.styles"

const FormInput = ({label,...otherprops}) => {
  
  return (
    <>
    <Group>
    <Input {...otherprops}/> 
    {label &&
    <InputLabel shrink={otherprops.value.length}>{label}</InputLabel>
    }
    </Group>
    </>
  )
}

export default FormInput