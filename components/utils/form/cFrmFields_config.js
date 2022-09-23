import {
    requiredRul_usinTmpl,
    minLengthRul_usinTmpl,
    maxLengthRul_usinTmpl,
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
    nmField: {  ...cFrmFields_config("Full Name", "text", "name" )
        , validtnRul: [
            requiredRul_usinTmpl("name")
            , minLengthRul_usinTmpl("name", 3)
            , maxLengthRul_usinTmpl("name", 25)
        ] 
    }
    , phField: { ...cFrmFields_config("Phone", "phone", "phone" )
        , validationRules: [
            requiredRul_usinTmpl("phone", 10)
            , minLengthRul_usinTmpl("phone", 3)
            , maxLengthRul_usinTmpl("phone", 25)
        ] 
    }
    , emField: { ...cFrmFields_config("Email", "email", "email" ) 
        , validationRules: [
            requiredRul_usinTmpl("email", 10)
            , minLengthRul_usinTmpl("email", 3)
            , maxLengthRul_usinTmpl("email", 25)
        ] 
    }
    , addrFeild: { ...cFrmFields_config("Address", "address", "address" ) 
        , validationRules: [
            requiredRul_usinTmpl("address", 10)
            , minLengthRul_usinTmpl("address", 3)
            , maxLengthRul_usinTmpl("address", 25)
        ] 
    }
    , pwField: { ...cFrmFields_config("Password", "password", "password" ) 
        , validationRules: [
            requiredRul_usinTmpl("password", 10)
            , minLengthRul_usinTmpl("password", 3)
            , maxLengthRul_usinTmpl("password", 25)
        ] 
    }
    , cfmPwField: { ...cFrmFields_config("Confirm Password", "cmpassword", "cmpassword" ) 
        , validationRules: [
            requiredRul_usinTmpl("cmpassword", 10)
            , minLengthRul_usinTmpl("cmpassword", 3)
            , maxLengthRul_usinTmpl("cmpassword", 25)
        ] 
    }
}



function cFrmFields_config(label, type, name, defaultValue='' ) {
    return {
        cusField_fnRjsx: (id, inpBoxValue, isValid, onChangeHdl, errorMsg) => {
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
