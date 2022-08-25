import "./form-input.styles.scss"

const FormInput = (props) => {
    const {label}=props
    console.log(props)
  return (
    <>
    <div className="group">
    <input className="form-input" {...props}/> 
    {label &&
    <label className={`form-input-label ${props.value.length?"shrink":""}`}>{label}</label>
    }
    </div>
    </>
  )
}

export default FormInput