import useForm from './useForm'
import './signupCmp.module.css'
import React from 'react'
import '../styles/globals.css'
import { signUpForm_objRpr } from './utils/form/cFrmFields_config'

function signUp() {
    const { renderFormInps, isFormValid } = useForm(signUpForm_objRpr)

    return (
        <form className='signUpForm'>
            <h1>Sign Up</h1>
            { renderFormInps() }
            <button type="submit" disabled={!isFormValid()}> Submit </button>
        </form>
    )
}

export default signUp