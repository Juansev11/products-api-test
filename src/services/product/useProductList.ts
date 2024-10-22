import { useFetch } from "../../hooks/useFetch";
import { Product } from "./types";

export const useProductList = () => {
  return useFetch<Product[]>({
    path: "products",
  });
};
