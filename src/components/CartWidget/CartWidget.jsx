import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartWidget () {

    const {totalQuantity} = useContext(CartContext)

    return (
            <Link to='/cart' className='cart-widget'>
                <FaShoppingCart size={32}/>
                <span>{totalQuantity}</span>
            </Link>
    )
}

export default CartWidget