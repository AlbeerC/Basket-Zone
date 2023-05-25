import './ProductsCard.scss'
import { BiHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function ProductsCard ( {name, img, price, category, id} ) {

    return (
        <Link to={`/detail/${id}`}>
            <div className='card'>
                    <span className='wishlist-btn'><BiHeart size={35} /></span>
                    <img src={img} alt="" />
                    <div className="card-info">
                        <p>{name}</p>
                        <div className="card-info-bottom">
                            <span>{category}</span>
                            <p className="price">US${price}</p>
                        </div>
                    </div>
            </div>
        </Link>
    )
}

export default ProductsCard