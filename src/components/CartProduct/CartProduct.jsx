import './CartProduct.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartProduct ( {id, name, price, img, quantity, size} ) {

    const {removeProduct} = useContext(CartContext)

    const handleRemove = (id) => {
        removeProduct(id)
      }

    return (
        <section className="cart-list">
            <div className='cart-product'>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>Price: US${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Size: {size}</p>
                <p>Subtotal: US${price * quantity}</p>
                <button onClick={() => handleRemove(id)}>Delete</button>
            </div>
        </section>

    )
}

export default CartProduct