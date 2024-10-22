import { useFetch } from "../../hooks/useFetch";
import { ProductDetails } from "./types";

export const useProduct = (id?: string) => {
  return useFetch<ProductDetails>({
    path: `products/${id}`,
  });
};
