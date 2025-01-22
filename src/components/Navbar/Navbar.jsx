import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Pet Shop Logo" className="navbar__logo-image" />
        <Link to="/" className="navbar__title">
          Pet Shop
        </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
