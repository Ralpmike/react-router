import { Link } from "react-router";
import styles from "../Product.module.css";

function Product({product}) {
  return (
    <Link to={`/product/${product.id}`} >
    <div className={styles.product}> 
      <img  src={product?.image} alt={product?.title} /> 
      <h2>{product?.title}</h2>
      <p> price: ${product?.price}</p>
    </div>
    </Link>
  )
}

export default Product