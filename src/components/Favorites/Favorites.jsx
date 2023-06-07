import './Favorites.scss'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import FavoritesCard from '../FavoritesCard/FavoritesCard'
import { Link } from 'react-router-dom'

function Favorites () {

    const { favorites } = useContext(FavoritesContext)

    if (favorites.length === 0) {
        return (
            <div className='favorites favorites-empty'>
                <h2>Your favorites list is empty</h2>
                <Link to='/'>Buy</Link>
            </div>
        )
    }

    return (
        <div className='favorites favorites-full'>
            <h2>Your favorites list</h2>
            <div className="list">
                {favorites.map((prod) => (
                    <FavoritesCard key={prod.id} {...prod} />
                ))}
            </div>
        </div>
    )
}

export default Favorites