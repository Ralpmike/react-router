import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../services/services";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const data = await getSingleProduct(productId);
      setProduct(data);
      setIsLoading(false);
    };
    fetchSingleProduct();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <p>Loading Product...</p>
      ) : (
        <div>
          <img src={product.image} alt="" />
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
        </div>
      )}
    </>
  );
}

export default ProductDetailsPage;
