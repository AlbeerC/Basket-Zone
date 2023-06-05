import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()


function CartProvider ({children}) {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
      }, [cart])
    
      useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])


    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeProduct = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const addProduct = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
          } else {
            console.log('it is already in the cart')
          }
    }

    const getQuantity = () => {
        let acc = 0
    
        cart.forEach((prod) => {
          acc += prod.quantity
        })
    
        return acc
    }
    
    const getTotal = () => {
        let acc = 0
        cart.forEach(prod => {
          acc += prod.quantity * prod.price
        })
    
        return acc
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{cart, clearCart, isInCart, removeProduct, addProduct, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider