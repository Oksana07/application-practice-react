import LabelInput from "../LabelInput/LabelInput";

const Form = ({
    cbOnSubmit, 
    handleChange, 
    formOpts, 
    formValues, 
    btnTitle
}) => {
    const handeleSubmit = (e) => {
        e.preventDefault();
        cbOnSubmit();
    }
    return (
        <form onSubmit={handeleSubmit}>
            <button type='submit'>{btnTitle}</button>
            {formOpts.map(({type, title, name, placeholder }) => (
                <LabelInput
                type={type}
                title= {title}
                name={name}
                value={formValues[name]}
                placeholder={placeholder}
                cbOnChange={handleChange}
                    />
            ))}        
         </form>   
        );
    };

export default Form;