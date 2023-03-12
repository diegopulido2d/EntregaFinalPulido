import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <ItemsContext.Provider value={{items, setItems, cartQuantity, setCartQuantity}}>
      {children}
    </ItemsContext.Provider>
  );
};
