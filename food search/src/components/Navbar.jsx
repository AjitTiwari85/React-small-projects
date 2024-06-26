import React from "react";

function Navbar() {
  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#fbd165] py-4 shadow-md"
    >
      <div className="left">
        <div className="logo font-bold text-2xl text-black text-center">
          Food App
        </div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-black justify-center">
          <li className="cursor-pointer text-lg">Home</li>
          <li className="cursor-pointer text-lg">About</li>
          <li className="cursor-pointer text-lg">Contact</li>
          <li className="cursor-pointer text-lg">Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
