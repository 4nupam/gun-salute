import React from "react";
import { FaStar } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { FiMinus, FiPlus } from "react-icons/fi";
import useCartStore from "../../Zustand/useCartStore";

export default function ProductCard({ product }) {
  const {
    name,
    description,
    image,
    price,
    veg,
    spicy_level,
    rating,
    tags,
    available,
    id,
  } = product;

  const { addToCart, removeFromCart, getQuantity } = useCartStore();
  const quantity = getQuantity(id);

  return (
    <div className="max-w-sm h-full bg-[#FFF8F0] border border-[#8B5E3C] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <span className="hidden">{id}</span>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
        <span
          className={`absolute top-3 right-3 text-xl p-2 rounded-full shadow-md ${
            veg ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
          title={veg ? "Vegetarian" : "Non-Vegetarian"}
        >
          {veg ? <BiLeaf /> : <TbMeat />}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-serif text-[#6A1B1A] mb-1">{name}</h3>
          <p className="text-sm text-[#1C1C1C] mb-2 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-lg text-[#F4A300]">₹{price}</span>
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <FaStar />
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {spicy_level > 0 && (
              <span className="flex items-center text-xs px-2 py-1 rounded-full bg-[#F4A300] text-white shadow-sm">
                <GiChiliPepper className="mr-1" /> Spicy x{spicy_level}
              </span>
            )}
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#E6D3B3] text-[#1C1C1C] px-2 py-0.5 rounded-full text-xs shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Order or Counter Button */}
        <div className="mt-auto">
          {available ? (
            quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 cursor-pointer rounded-lg text-sm font-semibold bg-[#6A1B1A] text-[#FFD700] hover:bg-[#922B21] transition-all duration-300"
              >
                Order Now
              </button>
            ) : (
              <div className="flex items-center justify-center w-full bg-[#6A1B1A] text-[#FFD700] rounded-lg overflow-hidden">
                <button
                  onClick={() => removeFromCart(id)}
                  className="flex-1 py-2 text-center hover:bg-[#4B0F0F] transition"
                >
                  <FiMinus />
                </button>
                <div className="flex-1 py-2 text-center font-bold">{quantity}</div>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 py-2 text-center hover:bg-[#4B0F0F] transition"
                >
                  <FiPlus />
                </button>
              </div>
            )
          ) : (
            <button
              disabled
              className="w-full py-2 rounded-lg bg-gray-300 text-gray-600 cursor-not-allowed text-sm font-semibold"
            >
              Currently Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
