import React from "react";

const ProductCard = ({ title, price, description, imageUrl }) => {
  return (
    <div className="text-center bg-white border border-gray-200 rounded-lg shadow-md h-full">
      <div className="h-48 overflow-hidden cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-800 font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
