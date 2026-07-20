import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { isCartOpen, cartItems } = useContext(MyStore);

  const [productsData, setProductsData] = React.useState([]);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProductsData(res.data.products);
    } catch (error) {
      console.log("Error in API → ", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-fit bg-black text-white p-2 flex flex-col gap-5">
      
      <Navbar />

      {isCartOpen ? (
        <div className="">
          <CartScreen />        
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {
            productsData.map((elem) => {

              let isInCart = cartItems.find((val) => val.id === elem.id);
              console.log(isInCart);

              return <ProductCards key={elem.id} product={elem} isInCart={isInCart} />;
            })
          }
        </div>
      )}
      
    </div>
  );
};

export default App;
