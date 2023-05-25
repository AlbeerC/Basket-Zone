import './Detail.scss'
import { FaShoppingCart } from 'react-icons/fa'

function Detail ( {data} ) {

    return (
        <div className="detail">
            <div className="detail-left">
                <img src={data.img} alt={data.name} />
            </div>
            <div className="detail-right">
                <h2>{data.name}</h2>
                <p className="stock">En stock disponible</p>
                <p className='price'>US${data.price}</p>
                <div className="size">
                    <div className="size-top">
                        <h3>Size</h3>
                        <p>Size guide</p>
                    </div>
                    <div className="size-btns">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>
                </div>
                <button className='add-to-cart'>Add to cart <FaShoppingCart size={20}/></button>
            </div>
        </div>
    )
}

export default Detail