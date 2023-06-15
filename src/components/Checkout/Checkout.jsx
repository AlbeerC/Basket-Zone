import { useState, useContext } from 'react'
import './Checkout.scss'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function Checkout () {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [adress, setAdress] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const navigate = useNavigate()
    const { clearCart } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (name && phone && city && adress) {
          setFormSubmitted(true)
          setTimeout(() => {
            setFormSubmitted(false)
            clearCart()
            return navigate("/")
          }, 3000)
        }
      }
      
    return (
        <div className='checkout'>
            <h2>Enter your data to generate your order</h2>
            {formSubmitted && <p className='success-message'>Order generated successfully! Thanks for your purchase</p>}
            <form className='checkout-form' onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" placeholder='Jayson Tatum' required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input type="number" placeholder='+1 716 123-4567' required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="field">
                    <label>City</label>
                    <input type="text" placeholder='Boston' required value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Adress</label>
                    <input type="text" placeholder='24 School St' required value={adress} onChange={(e) => setAdress(e.target.value)}/>
                </div>
                <button type='submit'>Generate order</button>
            </form>
        </div>
    )
}

export default Checkout