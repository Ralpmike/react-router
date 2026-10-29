import Product from './Product'
import { useProducts } from '../helper/useProducts'
import styles from '../ProductLists.module.css'

function ProductLists() {

  const {products} = useProducts()
  console.log(products);
  return (
    <div className={styles.productLists}>
      {
        products?.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default ProductLists