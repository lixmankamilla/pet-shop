import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToFavorites } from "../../store/favoritesSlice";
import "./CategoryAnimalPage.scss";

const CategoryAnimalPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.items);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === category
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="category-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Category</h1>
      {filteredProducts.length > 0 ? (
        <>
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
            <span>
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
        </>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryAnimalPage;
