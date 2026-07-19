import React from 'react'
import CartItems from '../components/CartItems'

const CartScreen = ({cartItems}) => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {cartItems.map((elem) => {
        return <CartItems key={elem.id} product={elem} />
      })}
    </div>
  )
}

export default CartScreen
