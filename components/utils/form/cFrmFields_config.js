import cusCmp_usedTmpl from "@components/formInpCmp_Tmpl/InpCmp_Tmpl"

import {
    requiredRul_usinTmpl,
    minLengthRul_usinTmpl,
    maxLengthRul_usinTmpl,
} from "./inputValidationRules";

    /**
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */

export const signUpForm_objRpr = {
    // config returns 6 props; cusField_fnRjsx, label, value, valid, errorMsg, touched, validationRules
    nmField: {  ...cFrmFields_config("Full Name", "text", "name" )
        , validtnRul: [
            requiredRul_usinTmpl("name")
            , minLengthRul_usinTmpl("name", 3)
            , maxLengthRul_usinTmpl("name", 25)
        ] 
    }
    , phField: { ...cFrmFields_config("Phone", "phone", "phone" )
        , validationRules: [
            requiredRule("phone", 10)
            , maxLengthRule("phone")
            , minLengthRule("phone", 25)
        ] 
    }
    , emField: { ...cFrmFields_config("Email", "email", "email" ) 
        , validationRules: [
            requiredRule("email", 10)
            , maxLengthRule("email")
            , minLengthRule("email", 25)
        ] 
    }
    , addrFeild: { ...cFrmFields_config("Address", "address", "address" ) 
        , validationRules: [
            requiredRule("address", 10)
            , maxLengthRule("address")
            , minLengthRule("address", 25)
        ] 
    }
    , pwField: { ...cFrmFields_config("Password", "password", "password" ) 
        , validationRules: [
            requiredRule("password", 10)
            , maxLengthRule("password")
            , minLengthRule("password", 25)
        ] 
    }
    , cfmPwField: { ...cFrmFields_config("Confirm Password", "cmpassword", "cmpassword" ) 
        , validationRules: [
            requiredRule("cmpassword", 10)
            , maxLengthRule("cmpassword")
            , minLengthRule("cmpassword", 25)
        ] 
    }
}



function cFrmFields_config(label, type, name, defaultValue='' ) {
    return {
        cusField_fnRjsx: (id, onchangehdl, inpBoxValue, isValid, errorMsg) => {
            return (
                <cusCmp_usedTmpl key={id} 
                label={label} type={type} name={name} 
                value={inpBoxValue} isValid={isValid} 
                onchangehdl={onchangehdl} errorMsg={errorMsg}
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
