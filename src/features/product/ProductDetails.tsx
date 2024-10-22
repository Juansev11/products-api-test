import React from "react";
import { useProduct } from "../../services/product/useProduct";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../cart/CartProvider";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useProduct(productId!);
  const { addToCart } = useCart();

  const handleAddToCartClick = () => {
    if (!data) return;

    addToCart(data);
  };

  return (
    <div>
      <Link to="/cart">Cart</Link>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <p>{data?.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
};
