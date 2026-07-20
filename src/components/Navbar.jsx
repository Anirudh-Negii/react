import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {

  let { isCartOpen, setisCartOpen } = useContext(MyStore);

  return (
    <div className="flex justify-between items-center p-5 bg-gray-800 text-white rounded-2xl">
      <div className="cursor-pointer">Logo</div>

      <div className="flex gap-10 text-xl">
        <button className="cursor-pointer" onClick={() => setisCartOpen(false)}>Home</button>
        <button className="cursor-pointer" onClick={() => setisCartOpen(true)}>Cart</button>
      </div>
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Login</button>
    </div>
  )
}

export default Navbar
