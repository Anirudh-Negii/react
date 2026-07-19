import React from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'

const App = () => {

  const getProductData = async () => {
    try {
      let res = await axios.get('https://dummyjson.com/products')
      console.log("API Response → ", res)
    }
    catch (error) {
      console.log("Error in API → ", error)
    }
  }

  // getProductData()
  
  return (
    <div className="h-screen bg-black text-white p-2">
      <Navbar />
    </div>
  )
}

export default App