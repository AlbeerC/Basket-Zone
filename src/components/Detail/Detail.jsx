import { useState, useContext } from 'react'
import './Detail.scss'
import DetailModal from '../DetailModal/DetailModal'
import { CartContext } from '../../context/CartContext'
import Count from '../Count/Count'
import { Link } from 'react-router-dom'

function Detail ( {img, name, price, id, stock} ) {

    const [modalOpen, setModalOpen] = useState(false)
    const [addToCart, setAddToCart] = useState(false)
    const [selectedSize, setSelectedSize] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { addProduct, isInCart } = useContext(CartContext)

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleOnAdd = (quantity) => {
        if (selectedSize) {
            const productToAdd = {id, name, price, quantity, img, size: selectedSize}
            addProduct(productToAdd)
        } else {
            setErrorMessage("Please choose a size")
            setTimeout(() => {
                setErrorMessage(false)
            }, 3000)
        }
    }

    const handleSizeSelection = (size) => {
        setSelectedSize(size)
    }
    

    return (
        <div className="detail">
            {modalOpen && <DetailModal onClose={handleCloseModal} />}
            <div className="detail-left">
                <img src={img} alt={name} />
            </div>
            <div className="detail-right">
                <h2>{name}</h2>
                <p className="stock">In stock avaliable - (5 units max)</p>
                <p className='price'>US${price}</p>
                <div className="size">
                    <div className="size-top">
                        <h3>Size</h3>
                        <button onClick={handleOpenModal}>Size guide</button>
                    </div>
                    <div className="size-btns">
                        <button className={selectedSize === 'S' ? 'selected' : ''} onClick={() => handleSizeSelection('S')}>S</button>
                        <button className={selectedSize === 'M' ? 'selected' : ''} onClick={() => handleSizeSelection('M')}>M</button>
                        <button className={selectedSize === 'L' ? 'selected' : ''} onClick={() => handleSizeSelection('L')}>L</button>
                        <button className={selectedSize === 'XL' ? 'selected' : ''} onClick={() => handleSizeSelection('XL')}>XL</button>
                        <button className={selectedSize === 'XXL' ? 'selected' : ''} onClick={() => handleSizeSelection('XXL')}>XXL</button>
                    </div>
                </div>
                {errorMessage && <p className="size-alert">{errorMessage}</p>}
                {
                    !isInCart(id) ? <Count onAdd={handleOnAdd} stock={stock}/> : 
                    <div className='after-buy'>
                        <Link to='/'>Keep buying</Link>
                        <Link to='/cart'>Go to cart</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Detail