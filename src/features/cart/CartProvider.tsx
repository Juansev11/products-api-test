import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartProduct, Product } from "../../services/product/types";

const CartProviderContext = createContext<{
  products: CartProduct[];
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
}>({
  products: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: Product) => {
    setProducts((prevProducts) => {
      let hasBeenIncremented = false;

      const newProducts = prevProducts.map((prevProduct) => {
        const incrementProduct = () => {
          hasBeenIncremented = true;

          return {
            ...prevProduct,
            quantity: prevProduct.quantity + 1,
          };
        };

        return prevProduct.id === product.id ? incrementProduct() : prevProduct;
      });

      return hasBeenIncremented
        ? newProducts
        : [
            ...newProducts,
            {
              ...product,
              quantity: 1,
            },
          ];
    });
  };

  const deleteFromCart = (productId: number) => {
    setProducts((prevProducts) => {
      const newProducts = prevProducts
        .map((prevProduct) => {
          if (prevProduct.id !== productId) return prevProduct;

          return prevProduct.quantity > 1
            ? { ...prevProduct, quantity: prevProduct.quantity - 1 }
            : null;
        })
        .filter((validProduct): validProduct is CartProduct =>
          Boolean(validProduct)
        );

      return newProducts;
    });
  };

  return (
    <CartProviderContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        products,
      }}
    >
      {children}
    </CartProviderContext.Provider>
  );
};

export const useCart = () => {
  const value = useContext(CartProviderContext);

  if (!value) {
    throw new Error("useCart must be used within a CartProviderContext");
  }

  return value;
};
