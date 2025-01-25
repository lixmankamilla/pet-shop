import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { initializeFavorites } from "../../store/favoritesSlice";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm.trim()}`);
      setSearchTerm("");
    }
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

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      alert("You have been logged out.");
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Pet Shop Logo" className="navbar__logo-image" />
        <Link to="/" className="navbar__title">
          Pet Shop
        </Link>
      </div>
      <form onSubmit={handleSearchSubmit} className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchSubmit}
        />
      </form>
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
        <div className="navbar__auth-buttons">
          {!isLoggedIn && (
            <>
              <button
                className="navbar__button navbar__button--signup"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
          {isLoggedIn && (
            <button
              className="navbar__button navbar__button--logout"
              onClick={handleLoginLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
