import './ProductsContainer.scss'
import Landing from '../Landing/Landing'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'

function ProductsContainer () {

    const [data, setData] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products')
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }

    }, [categoryId])


    return (
        <>
            <Landing />
            <div className="products">
                <h2>Our products</h2>
                <div className="products-categories">
                    <ul>
                        <li to='/category/nba'>NBA</li>
                        <li to='/category/national'>National teams</li>
                        <li to='/category/old'>Old school</li>
                    </ul>
                    <p>See all</p>
                </div>
                <ProductsList data={data} />
            </div>
        </>
    )
}

export default ProductsContainer