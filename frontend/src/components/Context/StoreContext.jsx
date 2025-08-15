// components/Context/StoreContext.jsx
import React, { createContext, useState } from "react";
import { food_list } from "../../assets/assets"; // Import your existing array

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <StoreContext.Provider value={{ food_list, cartItems, addToCart, removeFromCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
