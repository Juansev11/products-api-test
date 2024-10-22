import { useCart } from "./CartProvider";

export const Cart = () => {
  const { products, deleteFromCart } = useCart();
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <button onClick={() => deleteFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
