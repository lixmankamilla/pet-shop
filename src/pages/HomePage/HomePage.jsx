import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      filterCategory ? product.category === filterCategory : true
    )
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      return 0;
    });

  const recommendedProducts = products.slice(0, 3);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="homepage">
      <h1 className="homepage__title">Pet Shop</h1>

      <div className="homepage__controls">
        <input
          type="text"
          className="homepage__search"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <select
          className="homepage__sort"
          onChange={handleSort}
          value={sortOrder}
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <select
          className="homepage__filter"
          onChange={handleFilter}
          value={filterCategory}
        >
          <option value="">All Categories</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
      </div>

      <h2 className="homepage__section-title">Recommended Products</h2>
      <div className="homepage__recommended-list">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="homepage__product-card">
            <img
              src={product.image}
              alt={product.name}
              className="homepage__product-image"
            />
            <h2 className="homepage__product-name">{product.name}</h2>
            <p className="homepage__product-price">${product.price}</p>
            <button
              className="homepage__add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="homepage__product-link"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <h2 className="homepage__section-title">All Products</h2>
      <div className="homepage__product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="homepage__product-card">
            <img
              src={product.image}
              alt={product.name}
              className="homepage__product-image"
            />
            <h2 className="homepage__product-name">{product.name}</h2>
            <p className="homepage__product-price">${product.price}</p>
            <button
              className="homepage__add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="homepage__product-link"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
