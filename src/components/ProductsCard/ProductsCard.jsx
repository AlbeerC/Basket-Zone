import './ProductsCard.scss'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'

function ProductsCard ( {name, img, price, category, id} ) {

    const { addToFavorites, isInFavorites } = useContext(FavoritesContext)
    const [message, setMessage] = useState("")

      const handleAddToFavorites = () => {
        
        const showMessage = (messageToShow) => {
            setMessage(messageToShow)
            setTimeout(() => {
                setMessage(false)
            }, 3000);
        }

        if (isInFavorites(id)) {
            showMessage("It is alredy in the favorites list")
        } else {
            addToFavorites({ name, img, price, category, id })
            showMessage("Product added to favorites list")
        }
      }

    return (
        <div className='card'>
            <button onClick={handleAddToFavorites} className='wishlist-btn'>
                { isInFavorites(id) ? <FaHeart size={35}/> : <FaRegHeart size={35}/> }
            </button>
            <Link to={`/detail/${id}`}>
                <img src={img} alt="" />
                <div className="card-info">
                    <p>{name}</p>
                    <div className="card-info-bottom">
                        <span>{category}</span>
                        <p className="price">US${price}</p>
                    </div>
                </div>
            </Link>
            { message ? <p className='message'>{message}</p> : <p></p> }
        </div>
    )
}

export default ProductsCard