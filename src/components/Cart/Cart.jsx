import './Cart.scss';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import { useAuth } from "../../context/AuthContext";

function Cart () {

    const {cart, total, clearCart} = useContext(CartContext)
    const auth = useAuth()
    const user = auth.isLoggedIn

    const handleButton = () => {
        if (user) {
            return <Link to='/checkout'><button>Finish buying</button></Link>
        } else {
            return <Link to='/login'><button>Finish buying</button></Link>
        }
    } 


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
{/*                 <Link to='/checkout'><button>Finish buying</button></Link> */}
                {handleButton()}
                <button onClick={() => clearCart()}>Clear cart</button>
            </div>
        </div>
    )
}

export default Cart