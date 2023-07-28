<<<<<<< HEAD
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ handleAddToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
=======
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ handleAddToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
>>>>>>> 4b68a1092258c410e9a8e8767c0325f0786973e0
