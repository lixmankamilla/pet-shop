import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../store/favoritesSlice";
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      <div className="favorites-page__list">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <div key={item.id} className="favorites-page__item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>You have no favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
