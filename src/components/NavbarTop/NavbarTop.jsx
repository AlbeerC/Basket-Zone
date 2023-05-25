import { useEffect, useState } from 'react'
import './NavbarTop.scss'

function NavbarTop () {

    const phrases = [
        "Discounts for you. Up to 20% on selected products",
        "Free shipping on purchases over US$100",
        "3 interest-free installments"
    ]

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const currentPhrase = phrases[currentPhraseIndex];

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="navbar-top">
            <p>{currentPhrase}</p>
        </div>
    )
}

export default NavbarTop