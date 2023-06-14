import { useEffect, useState } from 'react'
import './Dashboard.scss'
import { useAuth } from '../../context/AuthContext'
import { FaShoppingCart, FaHeart, FaBasketballBall } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Dashboard() {
    const auth = useAuth()
    const [user, setUser] = useState(null)

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const currentUser = await auth.getCurrentUser()
          setUser(currentUser)
        } catch (error) {
          console.log('Error:', error)
        }
      };
      fetchUser()
    }, [])

    const handleLogout = () => {
      auth.logout()
    }

    return (
      <div className='dashboard'>
        {user ? <h2>Welcome, {user.email}</h2> : <h2>User not found. Please <Link to='/login'>log in</Link></h2>}
        <div className="info">
          <Link to='/favorites'><p>My favorist list <FaHeart size={20}/></p></Link>
          <Link to='/cart'><p>My cart <FaShoppingCart size={20}/></p></Link>
          <Link to='/'><p>Go to buy <FaBasketballBall size={20}/></p></Link>
          <Link to='/login'><button onClick={() => handleLogout()}>Logout</button></Link>
        </div>
      </div>
    );
}

export default Dashboard;
