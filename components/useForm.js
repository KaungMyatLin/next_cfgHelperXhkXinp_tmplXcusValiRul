const { useState, useCallback } = require("react");

function useForm (formObj) {
    const [form, setForm ] = useState(formObj)

    const uJsxXRtrIsAInpFieldValid = useCallback(
        (aInpField_bj) => {
            for (const rule of aInpField_bj.validationRule) {
                if (!rule.validate(aInpField_bj.value, form)) {
                    aInpField_bj.errorMsg = rule.errorMsg
                    return false;
                }
            }
            return true
            },
        [second],
    )

    const onInputChange = useCallback((e) => {
            const { name, val } = e.target;
            const aInpField_obj = { ... form[name]} // copy the obj whose value was changed
            // this obj is with 7 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validaitonRules 
            aInpField_obj.value = value; //update the value

            const isAInpFieldValid_newBool = uJsxXRtrIsAInpFieldValid(aInpField_obj);
            if (isAInpFieldValid_newBool && !aInpField_obj.valid) {
                aInpField_obj.valid = true
            }
            else if(!isAInpFieldValid_newBool && aInpField_obj.valid) {
                aInpField_obj.valid = false;
            }

            aInpField_obj.touched = false;
            setForm ( { ... form, [name]: aInpField_obj } )
        }, [ form, uJsxXRtrIsAInpFieldValid ]
    )

    const renderFormInps = () => {
        return Object.values(form).map(
            (inpObj) => {
                const { cusField_fnRjsx, label, value, valid, errorMsg, touched } = inpObj; // obj returned 7 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validaitonRules 
                return cusField_fnRjsx(label, value, valid, errorMsg, touched, onInputChange)
            }
        )
    }

    const isFormValid = useCallback(()=>{
        let isValid = true;
        const arr = Object.values(form) //arrays of objs with 7 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validaitonRules 

        for (let i=0; i<arr.length; i++) {
            if (!arr[i].valid) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }, [form])

    return { renderFormInps, isFormValid }
}