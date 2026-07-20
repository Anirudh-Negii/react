import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrementQuantity = (id) => {
    setCartItems((prev) =>{
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      })
    })
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) =>{
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
      })
    })
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((val) => val.id !== id));
  }

  return (
    <MyStore.Provider value={{ isCartOpen, setisCartOpen, cartItems, setCartItems, incrementQuantity, decrementQuantity, removeFromCart }}>
        {children}
    </MyStore.Provider>
  );
};
