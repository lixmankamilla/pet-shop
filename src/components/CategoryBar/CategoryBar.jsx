import React from "react";
import "./CategoryBar.scss";

const categories = ["Dog", "Cat", "Bird", "Small Pets"];

const CategoryBar = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <span
          key={category}
          className={`category-bar__item ${
            selectedCategory === category.toLowerCase() ? "active" : ""
          }`}
          onClick={() => onCategorySelect(category.toLowerCase())}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryBar;
