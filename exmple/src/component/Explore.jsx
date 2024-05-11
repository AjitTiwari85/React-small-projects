import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Explore() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="my-2 ">
        <input
          className="p-2 w-full bg-slate-200 rounded-t-xl outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-3xl text-slate-400">No results found</div>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <Link
                to={`/productdetail/${product.id}`}
                className="block h-full"
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  imageUrl={product.thumbnail}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Explore;
