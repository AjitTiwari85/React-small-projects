import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    console.log("Product added to cart:", product);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="max-w-lg mx-auto">
          <img src={product.thumbnail} alt={product.name} className="w-full" />
        </div>
        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg font-semibold mb-2">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          {/* Add Variant Selection */}
          <div className="mb-4">
            {/* Add variant selection options if applicable */}
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Product Reviews */}
      <div className="mt-8">
        {/* Display product reviews and ratings if available */}
      </div>
      {/* Related Products */}
      <div className="mt-8">{/* Display related products */}</div>
    </div>
  );
}

export default ProductDetail;
