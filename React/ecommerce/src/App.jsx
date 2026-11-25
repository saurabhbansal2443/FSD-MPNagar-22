import React from "react";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Wishlist from "./Screens/Wishlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Screens/Category";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/category/:slug" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
