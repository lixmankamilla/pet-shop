import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import favoritesReducer, { initializeFavorites } from "./favoritesSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
store.dispatch(initializeFavorites(savedFavorites));

export default store;
