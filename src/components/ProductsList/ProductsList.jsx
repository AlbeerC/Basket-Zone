import ProductsCard from '../ProductsCard/ProductsCard'
import './ProductsList.scss'

function ProductsList({ data }) {

  return (
    <div>
        <div className="products-list">
            {data.map((prod) => (
                <ProductsCard
                key={prod.id}
                img={prod.img}
                name={prod.name}
                category={prod.category}
                price={prod.price}
                />
            ))}
        </div>
    </div>
  )

}

export default ProductsList
