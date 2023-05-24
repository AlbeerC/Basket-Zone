import './ProductsContainer.scss'
import Landing from '../Landing/Landing'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'

function ProductsContainer () {

    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])    
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const { categoryId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products')
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
            .then(res => {
                const productsData = res.docs.map(product => ({id: product.id, ...product.data()}));
                setData(productsData);
                setOriginalData(productsData);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            getDocs(queryCollection)
            .then(res => {
                const productsData = res.docs.map(product => ({id: product.id, ...product.data()}));
                setData(productsData);
                setOriginalData(productsData);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }

    }, [categoryId])

    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        filter(searchTerm);
    }

    const filter = (searchTerm) => {
        if (searchTerm.trim() === "") {
            setData(originalData);
            return (<h1>NOT FOUND</h1>);
        } else {
            const searchResults = originalData.filter((element) => {
                const elementName = element.name.toString().toLowerCase();
                return elementName.includes(searchTerm.toLowerCase());
            });
            setData(searchResults);
        }
    }


    if (loading) { return (<h1 className='loading'>LOADING...</h1>) }

    return (
        <>
            <Landing />
            <div className="products">
                <h2>Our products</h2>
                <div className="products-categories">
                    <ul>
                        <li>NBA</li>
                        <li>Hardwood Classic</li>
                        <li>Custom</li>
                    </ul>
                    <p>See all</p>
                </div>
                <input className="search" type="search" value={search} onChange={handleSearch} placeholder="Search by club, player, color"/>
                {data.length === 0 ? <h2 className='notfound'>NOT FOUND</h2> : <ProductsList data={data} />}
            </div>
        </>
    )
}

export default ProductsContainer