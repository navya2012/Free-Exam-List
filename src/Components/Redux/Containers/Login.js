import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { loginData } from "../Actions/Action";
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate()

    /* form submit */
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginData(email, password, navigate))
    }

    return (
        <>
            <div className="form-position">
                <h1>LoginForm</h1>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="form-group ">
                            <label htmlFor="email">Email</label>
                            <input type='text' name='email' className="form-control" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="pwd">Password</label>
                            <input type='text' name='pwd' className="form-control" id='pwd' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

