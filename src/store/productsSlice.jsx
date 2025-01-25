import { createSlice } from "@reduxjs/toolkit";
import recomended1 from "../assets/recomended1.webp";
import recomended2 from "../assets/recomended2.webp";
import recomended3 from "../assets/recomended3.webp";
import recomended4 from "../assets/recomended4.webp";
import recomended5 from "../assets/recomended5.webp";
import recomended6 from "../assets/recomended6.webp";
import recomended7 from "../assets/recomended7.webp";
import recomended8 from "../assets/recomended8.webp";
import recomended9 from "../assets/recomended9.webp";
import recomended10 from "../assets/recomended10.webp";
import recomended11 from "../assets/recomended11.webp";
import recomended12 from "../assets/recomended12.webp";

const initialState = {
  items: [
    {
      id: 1,
      name: "Taste of the Wild Pacific Stream Adult Canine Formula Dry Dog Food",
      price: 20,
      category: "dog",
      image: recomended1,
    },
    {
      id: 2,
      name: "Lily's Kitchen Countryside Casserole with Chicken, Duck & Sweet Potatoes Adult Dry Dog Food",
      price: 15,
      category: "dog",
      image: recomended2,
    },
    {
      id: 3,
      name: "Royal Canin Golden Retriever Adult Dry Dog Food 12kg",
      price: 50,
      category: "dog",
      image: recomended3,
    },
    {
      id: 4,
      name: "Taste of the Wild PREY Angus Beef Dry Dog Food",
      price: 50,
      category: "dog",
      image: recomended4,
    },
    {
      id: 5,
      name: "Royal Canin Kitten Dry Food",
      price: 50,
      category: "cat",
      image: recomended5,
    },
    {
      id: 6,
      name: "Petshop by Fringe Studio Ear-Resistible! Plush Dog Toy 25x15x7cm",
      price: 50,
      category: "dog",
      image: recomended6,
    },
    {
      id: 7,
      name: "Petshop by Fringe Studio Bunny-Saurus Squeaker 45cm",
      price: 50,
      category: "dog",
      image: recomended7,
    },
    {
      id: 8,
      name: "D&D Tie Dog Toy 23x11.5x2.3cm",
      price: 50,
      category: "dog",
      image: recomended8,
    },
    {
      id: 9,
      name: "Zolux Rody 3 Duo Rodent Cage for Small Pets 40.5x27x41cm",
      price: 50,
      category: "small pets",
      image: recomended9,
    },
    {
      id: 10,
      name: "Little One Mountain Hay for Small Pets 1KG",
      price: 50,
      category: "small pets",
      image: recomended10,
    },
    {
      id: 11,
      name: "Padovan Wellness Mix Seeds Parrot Food",
      price: 50,
      category: "bird",
      image: recomended11,
    },
    {
      id: 12,
      name: "RIO Sunflower Seeds Bird Food 2KG",
      price: 50,
      category: "bird",
      image: recomended12,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
