import React from "react";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Wishlist from "./Screens/Wishlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
