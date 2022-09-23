import styles from './InpCmp_tmpl.module.css'
import React from "react";
function InputField(props) {
    console.log("InputField line4")
    const { label, type, name, value, isValid, onChangeHdl, errorMsg } = props;
    return (
        <div className={styles.inputContainer}>
            <label className={styles.field_lbl}>{label}</label>
            <input className={styles.field_inp} type={type} name={name} value={value} 
            onChange={onChangeHdl} />
            { errorMsg && !isValid && (
                <span className={styles.errorMsgTag_span}> {errorMsg} </span>
            )}
        </div>
    )
}

export default React.memo(InputField);