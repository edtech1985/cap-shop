import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
