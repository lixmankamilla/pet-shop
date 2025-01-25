import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../../data/products";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToFavorites } from "../../store/favoritesSlice";
import "./SearchResults.scss";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query")?.toLowerCase() || "";

  const dispatch = useDispatch();
  const recommendedProducts = useSelector((state) => state.products.items);
  const allProducts = [...products, ...recommendedProducts];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
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
    <div className="search-results">
      <h1>Search Results</h1>
      {filteredProducts.length > 0 ? (
        <div>
          <div className="products-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <div className="product-card__buttons">
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="add-to-favorites"
                    onClick={() => handleAddToFavorites(product)}
                  >
                    ❤️
                  </button>
                  <Link to={`/product/${product.id}`} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of{" "}
              {Math.ceil(filteredProducts.length / productsPerPage)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={
                currentPage ===
                Math.ceil(filteredProducts.length / productsPerPage)
              }
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No results found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchResults;
