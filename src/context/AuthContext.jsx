import { auth } from '../firebase/config'
import { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log("Error in auth context")
    }
    return context
}

function AuthProvider ( {children} ) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        setIsLoggedIn(true);
    }

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        setIsLoggedIn(true);
    }

    const logout = async () => {
        const response = await signOut(auth)
        setIsLoggedIn(false);
    }

    const getCurrentUser = () => {
        const currentUser = auth.currentUser
        if (currentUser) {
            return currentUser
        } else {
            return null
        }
    }

    return (
        <AuthContext.Provider value={{register, login, logout, getCurrentUser, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
