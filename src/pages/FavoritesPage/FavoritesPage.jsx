import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { removeFromFavorites } from "../../store/favoritesSlice";
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="favorites-page__products">
          {favorites.map((product) => (
            <div key={product.id} className="favorites-page__product-card">
              <div className="favorites-page__image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="favorites-page__product-name">{product.name}</h3>
              <p className="favorites-page__product-price">
                ${product.price.toFixed(2)}
              </p>
              <div className="favorites-page__buttons">
                <button
                  className="favorites-page__add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="favorites-page__remove-from-favorites"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  Remove
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="favorites-page__view-details"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no favorite items yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
