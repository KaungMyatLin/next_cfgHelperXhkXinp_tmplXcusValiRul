


export function requiredRul_usinTmpl(fieldName) {
    return validtnRul_objTmpl(
        "requiredField"
        , "required"
        , (inputVal, formObj) => inputVal.length !== 0
    )
}

export function minLengthRul_usinTmpl(fieldName, minChar) {
    return validtnRul_objTmpl(
        "minLength of ${fieldName}"
        , `${fieldName} should contain atleast ${minChar} characters`
        , (inputVal, formObj) => inputVal.length >= minChar
    )
}

export function maxLengthRul_usinTmpl(fieldName, maxChar) {
    return validtnRul_objTmpl(
        "maxLength of ${fieldName}"
        , `${fieldName} should contain lessthan ${maxChar} characters`
        , (inputVal, formObj) => inputVal.length <= maxChar
    )
}

export function pwMatchRul_usinTmpl() {
    return validtnRul_objTmpl(
        "passwordMatch"
        , `passwords do not match`
        , (inputValue, formObj) => inputValue === formObj.password.value
    );
}

/**
 * * write down required params before defining this below tmpl.
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMsg - message to display on each input error
 * @param {fn} validation_Fn - validation function itself
 */

function validtnRul_objTmpl (ruleName, errorMsg, validtnFn) {
    return {
        ruleName,
        errorMsg,
        validtnFn
    }
}
