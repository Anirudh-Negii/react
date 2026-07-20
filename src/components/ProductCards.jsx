import React, { useContext } from "react";
import { Star, ShoppingCart, Tag, Package } from "lucide-react";
import { MyStore } from "../context/MyContext";

const ProductCards = ({ product, isInCart }) => {
  let { cartItems, setCartItems } = useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, product]);
    alert(`${product.title} has been added to the cart!`);
  };

  if (!product) return null;

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(0);

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-110"
        />

        {/* Discount */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          <Tag size={14} />
          {Math.round(product.discountPercentage)}% OFF
        </div>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
          <Star size={14} fill="currentColor" />
          {product.rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-black">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${originalPrice}
          </span>
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2 text-sm text-green-600">
          <Package size={16} />
          {product.stock} in stock
        </div>

        {/* Button */}
        {isInCart ? (
          <button className="text-blue-800 w-full bg-gray-300 flex items-center justify-center gap-5 rounded-2xl py-1">
            <span className="text-4xl">-</span> 
            <span className="text-4xl">1</span> 
            <span className="text-4xl">+</span>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCards;