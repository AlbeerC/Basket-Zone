import './SignIn.scss'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'

function SignIn () {

    const auth = useAuth()
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [firebaseError, setFirebaseError] = useState(null) 
    const [redirectToDashboard, setRedirectToDashboard] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await auth.register(emailRegister, passwordRegister)
            setRedirectToDashboard(true)
        } catch (error) {
            setFirebaseError(error.message)
            setTimeout(() => {
                setFirebaseError(null)
            }, 4000)
        }
    }

    if (redirectToDashboard) {
        return <Navigate to='/myaccount'/>
    }


    return (
        <div className="form">
            <form>
                <h2>Sign in</h2>
                <div className='top'>
                    <p>Are you a member?</p>
                    <Link to='/login'>Log in</Link>
                </div>
                <input onChange={(e) => setEmailRegister(e.target.value)} type="email" placeholder='Email'/>
                <input onChange={(e) => setPasswordRegister(e.target.value)} type="Password" placeholder='Password'/>
                <button onClick={(e) => handleRegister(e)} className='submit'>Submit</button>
                {firebaseError && <p className="error-message">{firebaseError}</p>}
            </form>
        </div>
    )
}

export default SignIn