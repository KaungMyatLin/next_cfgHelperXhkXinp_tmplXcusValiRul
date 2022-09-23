import './InpCmp_tmpl.module.css'
import React from "react";

function InputField(props) {
    const { label, type, name, value, isValid, onChangeHdl, errorMsg } = props;
    return (
        <div className="inputContainer">
            <label className='field_lbl'>{label}</label>
            <input className='field_inp' type={type} name={name} value={value} 
            onChange={onChangeHdl} />
            { errorMsg && !isValid && (
                <span className="errorMsgTag_span"> {errorMsg} </span>
            )}
        </div>
    )
}

export default React.memo(InputField);