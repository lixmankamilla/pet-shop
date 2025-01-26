import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./pages/SearchResultsPage/SearchResult";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import CategoryAnimalPage from "./pages/CategoryAnimalPage/CategoryAnimalPage";
import Footer from "../src/components/Footer/Footer";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import "./styles/index.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <div id="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route
            path="/animal-category/:category"
            element={<CategoryAnimalPage />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/signin"
            element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
