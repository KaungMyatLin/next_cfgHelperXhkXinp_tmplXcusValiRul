import {
    requiredRul_usinTmpl,
    minLengthRul_usinTmpl,
    maxLengthRul_usinTmpl,
    pwMatchRul_usinTmpl,
} from "./inputValidationRules";
import CusCmp_usedTmpl from '../../formInpCmp_tmpl/InpCmp_tmpl'

    /**
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */

export const signUpForm_objRpr = {
    // config returns 6 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validationRules
    name: {  ...cFrmFields_cHelperFn("Full Name", "text", "name" )
        , validtnRul: [
            requiredRul_usinTmpl("name")
            , minLengthRul_usinTmpl("name", 3)
            , maxLengthRul_usinTmpl("name", 25)
        ] 
    }
    , email: { ...cFrmFields_cHelperFn("Email", "email", "email" ) 
        , validtnRul: [
            requiredRul_usinTmpl("email")
            , minLengthRul_usinTmpl("email", 10)
            , maxLengthRul_usinTmpl("email", 25)
        ] 
    }
    , password: { ...cFrmFields_cHelperFn("Password", "password", "password" ) 
        , validtnRul: [
            requiredRul_usinTmpl("password")
            , minLengthRul_usinTmpl("password", 8)
            , maxLengthRul_usinTmpl("password", 20)
        ] 
    }
    , cmpassword: { ...cFrmFields_cHelperFn("Confirm Password", "cmpassword", "cmpassword" ) 
        , validtnRul: [
            pwMatchRul_usinTmpl()
        ] 
    }
}



function cFrmFields_cHelperFn(label, type, name, defaultValue='' ) {
    return {
        cusField_fnRjsx: (id, inpBoxValue, isValid, onChangeHdl, errorMsg) => {
            console.log("cFrmFields_config cusField_fnRjsx line66")
            return (
                <CusCmp_usedTmpl key={id} 
                label={label} type={type} name={name} 
                value={inpBoxValue} isValid={isValid} 
                onChangeHdl={onChangeHdl} errorMsg={errorMsg}
                />
            )
        }
        , label
        , value: defaultValue
        , valid: false
        , errorMsg: ""
        , touched: false
    }
}
