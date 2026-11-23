import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-10 bg-blue-300 pl-4 pr-4 flex items-center justify-between">
      <Link to="/" className="text-white font-extrabold ">
        Nile
      </Link>
      <div className="flex items-center">
        <Link to="/wishlist" className="text-white px-2">
          Wishlist
        </Link>
        <Link to="/cart" className="text-white px-2">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
