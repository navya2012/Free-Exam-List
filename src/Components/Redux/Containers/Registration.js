import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registrationData } from '../Actions/Action'
import  "./Css_Modules/Registration.css"

export const  Registration = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    /* handle confirmpassword */
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setError(" **Match was not found")
        }
        else {
            setError("")
        }
    }

    /* submit form */
    const handleSubmit = (e) => {
        e.preventDefault()

        const register_data = { email, name, phone, password, confirmPassword }
        console.log(register_data)
        dispatch(registrationData(register_data, navigate))
    }

    return (
        <div className='form-position'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' name='email' id='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' id='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='text' name='phone' id='phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='ped'>Password:</label>
                        <input type='text' name='pwd' id='pwd' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPwd'>confirm Password:</label>
                        <input type='text' name='confirmPwd' id='confirmPwd' className='form-control' value={confirmPassword} onChange={handleConfirmPassword} />
                        <p>{error}</p>
                    </div>
                    <button type='submit' className='btn btn-success' >Register</button>
                </div>
            </form>
        </div>
    )
}
