import './InpCmp_Tmpl.module.css'


function InputField(props) {
    const { label, type, name, value, isValid, onChangeHdl, errorMsg } = props;
    return (
        <div className="inputContainer">
            <label>{label}</label>
            <input type={type} name={name} value={value} 
            onChange={onChangeHdl} />
            { errorMsg && !isValid && (
                <span className="errorMsgTag_span"> {errorMsg} </span>
            )}
        </div>
    )
}

export default React.memo(InputField);