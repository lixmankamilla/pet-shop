import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.scss";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Pet Shop</Link>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="navbar__cart">
          Cart ({totalItems} items - ${totalPrice})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;