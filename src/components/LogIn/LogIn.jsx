import { useState } from 'react'
import './LogIn.scss'
import { useAuth } from '../../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'

function LogIn () {

    const auth = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firebaseError, setFirebaseError] = useState(null)
    const [redirectToDashboard, setRedirectToDashboard] = useState(false)

      const handleLogin = async (e) => {
        e.preventDefault()
        try {
          await auth.login(email, password)
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
                <h2>Log In</h2>
                <div className="top">
                  <p>Not a member yet?</p>
                  <Link to='/register'>Sign in</Link>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
                <button onClick={(e) => handleLogin(e)} className='submit'>Submit</button>
                {firebaseError && <p className="error-message">{firebaseError}</p>}
            </form>
        </div>
    )
}

export default LogIn