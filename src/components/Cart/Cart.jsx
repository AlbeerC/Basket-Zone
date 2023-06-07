import './Cart.scss';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";

function Cart () {

    const {cart, total, clearCart} = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="cart empty-cart">
                <h2>Your cart is empty</h2>
                <Link to='/'>Buy</Link>
            </div>
        )
    }

    return (
        <div className="cart full-cart">
            <h2>Your cart</h2>
            {cart.map((prod) => (
                <CartProduct key={prod.id} {...prod} />
            ))}
            <div className="bottom">
                <p>Total: ${total}</p>
                <button>Finish buying</button>
                <button onClick={() => clearCart()}>Clear cart</button>
            </div>
        </div>
    )
}

export default Cart