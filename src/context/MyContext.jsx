import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider value={{ isCartOpen, setisCartOpen, cartItems, setCartItems }}>
        {children}
    </MyStore.Provider>
  );
};
