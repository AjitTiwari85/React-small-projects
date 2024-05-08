import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="input flex justify-center mt-10 mb-7 px-5 lg:px-0">
        <input
          type="text"
          placeholder="Search your recipe"
          className=" shadow-md bg-gray-200 placeholder-gray-500 rounded-l-lg 
          px-2 py-2 w-80 outline-none border-2 border-gray-600 "
        />
        <button
          className="bg-[#F8EFBA] px-4 rounded-r-lg text-black shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-600 "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
