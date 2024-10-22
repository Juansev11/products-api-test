import React from "react";

import { useProductList } from "../../services/product/useProductList";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const { data, loading } = useProductList();

  return loading ? (
    <span>Loading...</span>
  ) : (
    <ul>
      {data?.map((product) => (
        <li key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <Link to={`/products/${product.id}`}>Go to product</Link>
        </li>
      ))}
    </ul>
  );
};
