import './Navbar.scss'
import logo from '../../assets/logo.png'
import { FaUserAlt, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useAuth } from '../../context/AuthContext'

function Navbar () {

    const auth = useAuth()
    const user = auth.isLoggedIn

    const handleUserIcon = () => {
        if (user) {
            return <Link to='/myaccount'><FaUserAlt size={32} /></Link>
        } else {
            return <Link to='/login'><FaUserAlt size={32} /></Link>
        }
    }    

    return (
        <nav className='navbar'>
            <div className="navbar-bottom">
                <Link to='/'> <img src={logo} alt="brand logo" /> </Link>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/aboutus'>About us</Link>
                    <Link to='/help'>Help</Link>
                </ul>
                <div className='icons'>
                    {handleUserIcon()}
                    <Link to='/favorites'> <FaHeart size={32} /> </Link>
                    <CartWidget />
                </div>
            </div>

        </nav>
    )
}

export default Navbar
