import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page">
      <img
        src={product.image}
        alt={product.name}
        className="product-page__image"
      />
      <div className="product-page__details">
        <h1 className="product-page__name">{product.name}</h1>
        <p className="product-page__price">
          Price: ${product.price.toFixed(2)}
        </p>
        <p className="product-page__short-description">
          {product.shortDescription || "No description available."}
        </p>

        <h2 className="product-page__section-title">Details</h2>
        <ul className="product-page__details-list">
          {product.details && product.details.length > 0 ? (
            product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))
          ) : (
            <li>No details available.</li>
          )}
        </ul>

        <h2 className="product-page__section-title">Specifications</h2>
        <div className="product-page__specifications">
          {product.specs
            ? Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="product-page__spec">
                  <span className="product-page__spec-key">{key}:</span>
                  <span className="product-page__spec-value">{value}</span>
                </div>
              ))
            : "No specifications available."}
        </div>

        <button className="product-page__add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
