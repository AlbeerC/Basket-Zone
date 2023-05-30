import "./Count.scss"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"

function Count({stock = 0, initial = 1, onAdd}) {

  const [quantity, setQuantity] = useState(initial)

  const increase = () => {
    if(quantity < 5) {
      setQuantity(quantity + 1)
    }
  }

  const decrease = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="counter">
      <div className="counter-btns">
        <button onClick={decrease}> - </button>
        <p> {quantity} </p>
        <button onClick={increase}> + </button>
      </div>
      <button className="btn-add" onClick={() => onAdd(quantity)}>Add to cart <FaShoppingCart size={25} /></button>
    </div>
  )
}

export default Count
