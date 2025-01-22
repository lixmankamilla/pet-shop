import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import ProductPage from "./pages/ProductPage";
// import CartPage from "./pages/CartPage";
// import ContactPage from "./pages/ContactPage";
// import Navbar from "./components/Navbar";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
