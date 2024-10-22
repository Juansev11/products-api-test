import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductList } from "./features/product/ProductList";
import { ProductDetails } from "./features/product/ProductDetails";
import { Cart } from "./features/cart/Cart";
import { CartProvider } from "./features/cart/CartProvider";

const router = createBrowserRouter([
  {
    path: "/products",
    Component: ProductList,
  },
  {
    path: "/products/:productId",
    Component: ProductDetails,
  },
  {
    path: "/cart",
    Component: Cart,
  },
]);

function App() {
  return (
    <div className="App">
      <CartProvider>
        <h1>Web store application</h1>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
