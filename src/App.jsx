import React from 'react'
import axios from 'axios'

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

  getProductData()
  
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}

export default App