import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryPage = () => {
  const { category } = useParams();
  const products = useSelector((state) => state.products.items);
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="category-page">
      <h1>{category} category</h1>
      <div className="category-page__products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="category-page__product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
