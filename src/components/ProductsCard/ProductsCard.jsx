import './ProductsCard.scss'
import { BiHeart } from 'react-icons/bi'

function ProductsCard ( {name, img, price, category} ) {

    return (
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

    )
}

export default ProductsCard