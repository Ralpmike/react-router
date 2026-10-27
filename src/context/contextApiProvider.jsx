import { useEffect, useState } from "react";
import { getAllProducts } from "../services/services";
import { ContextApi } from "./context";

export default function ProductContextApi({ children }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProducts = async () => {
      const data = await getAllProducts(signal);
      setProducts(data);
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  const contextValue = {
    products,
    user,
    setUser,
  };

  return <ContextApi value={contextValue}>{children}</ContextApi>;
}
