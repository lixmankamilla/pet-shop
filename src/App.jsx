import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Navbar from "./components/Navbar/Navbar";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import "./styles/index.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </div>
);

export default App;
