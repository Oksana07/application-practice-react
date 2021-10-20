const LabelInput = ({
    title, 
    type="text",
    name, 
    value, 
    placeholder = null, 
    onChange,
}) => {
    return (
        <label>
            {title && <p>{title}</p>}
        <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        />
    </label>
    );
};

export default LabelInput;