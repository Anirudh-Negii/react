import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";

const App = () => {

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
      
      <div className="grid grid-cols-4 gap-4">
        {
          productsData.map((elem) => {
            return <ProductCards key={elem.id} product={elem} />;
          })
        }
      </div>

    </div>
  );
};

export default App;
