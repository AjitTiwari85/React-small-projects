import React from "react";

function SearchBar({ search, setSearch, fetchFood }) {
  return (
    <div>
      <div className="input flex justify-center mt-10 mb-7 px-5 lg:px-0 ">
        <input
          type="text"
          value={search}
          placeholder="Search your recipe"
          onChange={(e) => setSearch(e.target.value)}
          className=" shadow-md bg-gray-200 placeholder-gray-500 rounded-l-lg px-2 py-2 w-80 outline-none border-1 border-gray-600 "
        />
        <button
          onClick={fetchFood}
          className="bg-[#fbd165] px-4 rounded-r-lg text-black shadow-md border-b-1 border-r-1 border-t-1 border-gray-600 "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
