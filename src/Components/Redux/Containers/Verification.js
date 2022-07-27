import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { VerificationCode } from '../Actions/Action'
import  "./Css_Modules/Registration.css"

export const  Verification = () => {
    const [ code, setCode] = useState("")

    const dispatch = useDispatch()
    const navigater = useNavigate()

    /* on submit */
    const handleSubmitCode = (e) =>{
        e.preventDefault()
        console.log(code)
        dispatch(VerificationCode(code))
        navigater("/login")
    }

  return (
    <div className='form-position'>
        <form onSubmit={handleSubmitCode}> 
            <div className='container'>
                <div className='form-group'>
                    <label htmlFor='verifyEmail'>Email Verification Code:</label>
                    <input type='type' name='verifyEmail' id='verifyEmail' className='form-control' value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-success' >Submit</button>
            </div>
        </form>
    </div>
  )
}
