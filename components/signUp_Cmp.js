import useForm from './useForm'
import styles from './signUp_Cmp.module.css'
import React from 'react'
import { signUpForm_objRpr } from './utils/form/cFrmFields_config'
function Signup_Cmp() {
    const { renderFormInps, isFormValid } = useForm(signUpForm_objRpr)
    return (
        <form className={styles.signUpForm}>
            <h1>Sign Up</h1>
            { renderFormInps() }
            <button className={styles.signUp_btn} type="submit" disabled={!isFormValid()}> Submit </button>
        </form>
    )
}

export default Signup_Cmp