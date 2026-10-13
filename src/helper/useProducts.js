import { useContext } from "react";
import { ContextApi } from "../context/context";

export function useProducts() {
  const data = useContext(ContextApi);

  if (data === null) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return data;
}
