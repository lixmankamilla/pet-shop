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
        <p className="product-page__price">Price: ${product.price}</p>
        <p className="product-page__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada.
        </p>
        <button className="product-page__add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
