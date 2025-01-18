"use client";
import React, { useState } from "react";

const SkuCard = ({ name, batchNum, lastOrdered }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm mb-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">₹{batchNum}</p>
        <p className="text-sm text-gray-400">Ordered {lastOrdered} ago</p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrementQuantity}
          className={`w-8 h-8 flex justify-center items-center bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 ${
            quantity === 0 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="w-8 h-8 flex justify-center items-center bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SkuCard;
