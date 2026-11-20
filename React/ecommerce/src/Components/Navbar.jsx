import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-10 bg-blue-300 pl-4 pr-4 flex items-center justify-between">
      <p className="text-white font-extrabold ">Nile</p>
      <div className="flex items-center">
        <p className="text-white px-2">Wishlist</p>
        <p className="text-white px-2">Cart</p>
        <p className="text-white px-2">Account</p>
      </div>
    </div>
  );
};

export default Navbar;
