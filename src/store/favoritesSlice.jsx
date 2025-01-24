import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);
      if (!exists) {
        state.items.push(product);
      }
    },
    removeFromFavorites(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    initializeFavorites(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, initializeFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
