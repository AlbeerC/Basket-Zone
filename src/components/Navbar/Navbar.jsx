import './Navbar.scss'
import logo from '../../assets/logo.png'
import { FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

function Navbar () {

    return (
        <nav className='navbar'>
            <div className="navbar-bottom">
                <Link to='/'> <img src={logo} alt="brand logo" /> </Link>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link>About us</Link>
                    <Link>Contact</Link>
                </ul>
                <div className='icons'>
                    <FaUserAlt size={32} />
                    <FaHeart size={32} />
                    <CartWidget />
                </div>
            </div>

        </nav>
    )
}

export default Navbar