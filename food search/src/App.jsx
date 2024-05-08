import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ProductCard />
    </div>
  );
}

export default App;
