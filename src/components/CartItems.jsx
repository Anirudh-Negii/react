import React from "react";
import { Minus, Plus, Trash2, Star } from "lucide-react";

const CartItem = ({ product }) => {
  return (
    <div className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Product Image */}
      <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-32 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {product.category}
          </p>

          <h2 className="mt-1 text-xl font-semibold text-gray-900">
            {product.title}
          </h2>

          <div className="mt-2 flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-gray-700">
              {product.rating}
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-black">
              ${product.price}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center rounded-lg border">
              <button className="p-2 hover:bg-gray-100">
                <Minus size={18} />
              </button>

              <span className="w-10 text-center font-semibold">
                {product.quantity}
              </span>

              <button className="p-2 hover:bg-gray-100">
                <Plus size={18} />
              </button>
            </div>

            {/* Remove */}
            <button className="rounded-lg bg-red-50 p-3 text-red-600 transition hover:bg-red-100">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;