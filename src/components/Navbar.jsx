import React from 'react'

const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="flex justify-between items-center p-5 bg-gray-800 text-white rounded-2xl">
      <div className="cursor-pointer">Logo</div>

      <div className="flex gap-10 text-xl">
        <button className="cursor-pointer" onClick={() => setIsCartOpen(false)}>Home</button>
        <button className="cursor-pointer" onClick={() => setIsCartOpen(true)}>Cart</button>
      </div>
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Login</button>
    </div>
  )
}

export default Navbar
