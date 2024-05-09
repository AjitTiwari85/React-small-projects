import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Explore() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <Link to={`/productdetail/${product.id}`} className="block h-full">
              <ProductCard
                title={product.title}
                price={product.price}
                description={product.description}
                imageUrl={product.thumbnail}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
