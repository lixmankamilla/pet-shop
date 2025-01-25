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
      shortDescription:
        "Grain-free formula with fish protein for sensitive dogs.",
      details: [
        "High-quality fish protein.",
        "Supports sensitive digestion.",
        "Rich in omega fatty acids for healthy skin and coat.",
      ],
      specs: {
        Weight: "12kg",
        Ingredients: "Fish Protein, Sweet Potatoes, Peas",
        SuitableFor: "Adult dogs",
      },
    },
    {
      id: 2,
      name: "Lily's Kitchen Countryside Casserole with Chicken, Duck & Sweet Potatoes Adult Dry Dog Food",
      price: 15,
      category: "dog",
      image: recomended2,
      shortDescription:
        "A wholesome recipe made with natural ingredients for adult dogs.",
      details: [
        "Freshly prepared chicken and duck.",
        "Grain-free formula.",
        "Packed with sweet potatoes for natural energy.",
      ],
      specs: {
        Weight: "7kg",
        Ingredients: "Chicken, Duck, Sweet Potatoes",
        SuitableFor: "Adult dogs",
      },
    },
    {
      id: 3,
      name: "Royal Canin Golden Retriever Adult Dry Dog Food 12kg",
      price: 50,
      category: "dog",
      image: recomended3,
      shortDescription: "Tailored nutrition for adult Golden Retrievers.",
      details: [
        "Supports skin and coat health.",
        "Promotes cardiac health.",
        "Exclusive kibble design for dental care.",
      ],
      specs: {
        Weight: "12kg",
        Ingredients: "Chicken Meal, Rice, Omega-3",
        SuitableFor: "Adult Golden Retrievers",
      },
    },
    {
      id: 4,
      name: "Taste of the Wild PREY Angus Beef Dry Dog Food",
      price: 50,
      category: "dog",
      image: recomended4,
      shortDescription:
        "Limited-ingredient diet with Angus Beef as the primary protein.",
      details: [
        "High digestibility with limited ingredients.",
        "Rich in omega fatty acids.",
        "Supports overall health and well-being.",
      ],
      specs: {
        Weight: "11.3kg",
        Ingredients: "Angus Beef, Lentils, Sunflower Oil",
        SuitableFor: "Dogs with sensitivities",
      },
    },
    {
      id: 5,
      name: "Royal Canin Kitten Dry Food",
      price: 50,
      category: "cat",
      image: recomended5,
      shortDescription: "Nutritional support for growing kittens.",
      details: [
        "Provides immune support with antioxidants.",
        "Small, easy-to-chew kibble.",
        "Balanced nutrients for healthy growth.",
      ],
      specs: {
        Weight: "10kg",
        Ingredients: "Chicken Meal, Fish Oil, Antioxidants",
        SuitableFor: "Kittens up to 12 months",
      },
    },
    {
      id: 6,
      name: "Petshop by Fringe Studio Ear-Resistible! Plush Dog Toy 25x15x7cm",
      price: 50,
      category: "dog",
      image: recomended6,
      shortDescription: "Fun and durable plush toy for dogs.",
      details: [
        "Soft and safe material.",
        "Includes squeaker for extra fun.",
        "Perfect for medium-sized dogs.",
      ],
      specs: {
        Dimensions: "25x15x7cm",
        Material: "Plush",
        SuitableFor: "All dogs",
      },
    },
    {
      id: 7,
      name: "Petshop by Fringe Studio Bunny-Saurus Squeaker 45cm",
      price: 50,
      category: "dog",
      image: recomended7,
      shortDescription: "A squeaky toy with a unique bunny-saurus design.",
      details: [
        "Large size for bigger dogs.",
        "Durable construction for long-lasting play.",
        "Fun squeaker for engagement.",
      ],
      specs: {
        Dimensions: "45cm",
        Material: "Plush",
        SuitableFor: "Large dogs",
      },
    },
    {
      id: 8,
      name: "D&D Tie Dog Toy 23x11.5x2.3cm",
      price: 50,
      category: "dog",
      image: recomended8,
      shortDescription: "Durable tie-shaped toy for interactive play.",
      details: [
        "Perfect for tug-of-war games.",
        "Lightweight and easy to carry.",
        "Suitable for medium to large dogs.",
      ],
      specs: {
        Dimensions: "23x11.5x2.3cm",
        Material: "Rubber",
        SuitableFor: "Medium and large dogs",
      },
    },
    {
      id: 9,
      name: "Zolux Rody 3 Duo Rodent Cage for Small Pets 40.5x27x41cm",
      price: 50,
      category: "small pets",
      image: recomended9,
      shortDescription: "Spacious cage for small rodents with multiple levels.",
      details: [
        "Provides ample space for activity.",
        "Includes ramps and platforms for enrichment.",
        "Easy to clean and maintain.",
      ],
      specs: {
        Dimensions: "40.5x27x41cm",
        SuitableFor: "Small rodents",
        Material: "Metal and plastic",
      },
    },
    {
      id: 10,
      name: "Little One Mountain Hay for Small Pets 1KG",
      price: 50,
      category: "small pets",
      image: recomended10,
      shortDescription: "High-quality hay for small pets.",
      details: [
        "Rich in fiber for digestive health.",
        "Fresh and aromatic for palatability.",
        "Suitable for daily feeding.",
      ],
      specs: {
        Weight: "1kg",
        SuitableFor: "Rabbits, Guinea Pigs, Hamsters",
        Ingredients: "Natural hay",
      },
    },
    {
      id: 11,
      name: "Padovan Wellness Mix Seeds Parrot Food",
      price: 50,
      category: "bird",
      image:recomended11,
      shortDescription: "A nutritious mix of seeds for parrots.",
      details: [
        "Fortified with essential vitamins.",
        "Includes a variety of seeds for balanced nutrition.",
        "Promotes vibrant feathers and health.",
      ],
      specs: {
        Weight: "2kg",
        SuitableFor: "Parrots",
        Ingredients: "Seeds, Vitamins, Minerals",
      },
    },
    {
      id: 12,
      name: "RIO Sunflower Seeds Bird Food 2KG",
      price: 50,
      category: "bird",
      image: recomended12,
      shortDescription: "Sunflower seeds for all types of birds.",
      details: [
        "High-quality, cleaned sunflower seeds.",
        "Rich in energy and natural oils.",
        "Ideal for daily feeding.",
      ],
      specs: {
        Weight: "2kg",
        SuitableFor: "All birds",
        Ingredients: "Sunflower seeds",
      },
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
