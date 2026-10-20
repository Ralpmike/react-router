import { useEffect, useState } from "react";
import { getAllProducts } from "../services/services";
import { ContextApi } from "./context";



export default function ProductContextApi({ children }) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;
 const fetchProducts = async () => {
  const data = await getAllProducts(signal);
  setProducts(data);
 }

 fetchProducts();

 return () =>  controller.abort();

}, []);


const contextValue = {
  products,
}

  return <ContextApi value={contextValue}>{children}</ContextApi>;
}



