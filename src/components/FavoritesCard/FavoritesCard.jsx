import './FavoritesCard.scss'
import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'

function FavoritesCard ( {id, name, price, img, category} )  {
    
    const { removeFromFavorites } = useContext(FavoritesContext)

    const handleRemove = () => {
        removeFromFavorites(id)
    }

    return (
        <div className='favorite-card'>
            <Link to={`/detail/${id}`}> <img src={img} alt={name} /> </Link>
            <p className='name'>{name}</p>
            <p className='price'>US${price}</p>
            <p className='category'>{category}</p>
            <button onClick={handleRemove}><FaTrashAlt color='red' size={32}/></button>
        </div>
    )
}

export default FavoritesCard