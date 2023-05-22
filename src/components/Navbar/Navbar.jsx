import './Navbar.scss'
import logo from '../../assets/logo.png'
import { FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar () {

    return (
        <nav className='navbar'>
            <div className="navbar-bottom">
                <Link to='/'> <img src={logo} alt="brand logo" /> </Link>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li><FaUserAlt size={32} /></li>
                    <li><FaHeart size={32} /></li>
                    <li><FaShoppingCart size={32} /></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar