import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Dog Food",
      price: 20,
      category: "dog",
      image: "/images/dog-food.jpg",
    },
    {
      id: 2,
      name: "Cat Toy",
      price: 15,
      category: "cat",
      image: "/images/cat-toy.jpg",
    },
    {
      id: 3,
      name: "Bird Cage",
      price: 50,
      category: "bird",
      image: "/images/bird-cage.jpg",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
