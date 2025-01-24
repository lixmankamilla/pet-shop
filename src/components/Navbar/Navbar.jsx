import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initializeFavorites } from "../../store/favoritesSlice";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      dispatch(initializeFavorites(parsedFavorites));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Pet Shop Logo" className="navbar__logo-image" />
        <Link to="/" className="navbar__title">
          Pet Shop
        </Link>
      </div>
      <div className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/cart" className="navbar__cart">
          <FaShoppingCart className="navbar__cart-icon" />
          <span className="navbar__cart-text">
            Cart ({totalItems} items - ${totalPrice})
          </span>
        </Link>
        <Link to="/favorites" className="navbar__favorites">
          <div className="navbar__icon-wrapper">
            <i className="fas fa-heart"></i>
            {favorites.length > 0 && (
              <span className="navbar__badge">{favorites.length}</span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
