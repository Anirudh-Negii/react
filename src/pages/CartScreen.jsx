import React, { useContext } from "react";
import CartItems from "../components/CartItems";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="mb-8 text-4xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <CartItems key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;