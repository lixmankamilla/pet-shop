import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "../../data/products";
import { addToCart } from "../../store/cartSlice";
import { addToFavorites } from "../../store/favoritesSlice";
import "./CategoryPage.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  return (
    <div className="category-page">
      <h2>{category} Products</h2>
      <div className="category-page__products">
        {currentProducts.map((product) => (
          <div key={product.id} className="category-page__product-card">
            <div className="category-page__image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="category-page__product-name">{product.name}</h3>
            <p className="category-page__product-price">
              ${product.price.toFixed(2)}
            </p>
            <div className="category-page__buttons">
              <button
                className="category-page__add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="category-page__add-to-favorites"
                onClick={() => handleAddToFavorites(product)}
              >
                ❤️
              </button>
              <Link
                to={`/product/${product.id}`}
                className="category-page__view-details"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="category-page__pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="category-page__pagination-button"
        >
          Previous
        </button>
        <span className="category-page__pagination-info">
          Page {currentPage} of{" "}
          {Math.ceil(filteredProducts.length / productsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(filteredProducts.length / productsPerPage)
          }
          className="category-page__pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
