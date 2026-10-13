import { useEffect, useState } from "react";
import { getAllProducts } from "../services/services";
import { ContextApi } from "./context";



export default function ProductContextApi({ children }) {
  const [products, setProducts] = useState([]);

useEffect(() => {
 const fetchProducts = async () => {
  const data = await getAllProducts();
  setProducts(data);
 }

 fetchProducts();

}, []);


const contextValue = {
  products,
}

  return <ContextApi value={contextValue}>{children}</ContextApi>;
}



