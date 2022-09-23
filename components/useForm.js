const { useState, useCallback } = require("react");

function useForm (formObj) {
    console.log("useForm line4")
    const [form, setForm ] = useState(formObj)

    const uJsxXRtrIsAInpFieldValid = useCallback(
        (aInpField_obj) => {
            for (const rule of aInpField_obj.validtnRul) {
                if (!rule.validtnFn(aInpField_obj.value, form)) {
                    aInpField_obj.errorMsg = rule.errorMsg
                    return false;
                }
            }
            return true
            },
        [form],
    )

    const onInputChange = useCallback((e) => {
            console.log("useForm onInputChange line21")
            const { name, value } = e.target;
            const aInpField_obj = { ... form[name]} // copy the obj whose value was changed
            // this obj is with 7 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validaitonRules 
            aInpField_obj.value = value; //update the value
            console.log(aInpField_obj)
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
        console.log("useForm renderFormInps line41")
        return Object.values(form).map(
            (inpObj) => {   // obj returned 7 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validaitonRules 
                const { cusField_fnRjsx, label, value, valid, errorMsg } = inpObj; 
                return cusField_fnRjsx( label, value, valid, onInputChange, errorMsg);
            }
        )
    }

    const isFormValid = useCallback(()=>{
        console.log("useForm isFormValid line51")
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
export default useForm;