import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import spotlight1 from "../../assets/spotlight1.png";
import spotlight2 from "../../assets/spotlight2.png";
import spotlight3 from "../../assets/spotlight3.png";
import spotlight4 from "../../assets/spotlight4.png";
import spotlight5 from "../../assets/spotlight5.png";
import spotlight6 from "../../assets/spotlight6.png";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, initializeCart } from "../../store/cartSlice";
import "./HomePage.scss";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items);
  const categories = [
    {
      image: spotlight1,
      category: "Royal Canin",
    },
    {
      image: spotlight2,
      category: "Lily's Kitchen",
    },
    {
      image: spotlight3,
      category: "Thunder Paws",
    },
    {
      image: spotlight4,
      category: "Taste of the Wild",
    },
    { image: spotlight5, category: "Orijen" },
    { image: spotlight6, category: "Applaws" },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart) && parsedCart.length > 0) {
          dispatch(initializeCart(parsedCart));
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="homepage">
      <Carousel
        className="homepage__carousel"
        indicators={false}
        nextIcon={
          <span
            className="carousel-control-next-icon custom-arrow"
            aria-hidden="true"
          />
        }
        prevIcon={
          <span
            className="carousel-control-prev-icon custom-arrow"
            aria-hidden="true"
          />
        }
      >
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <h2 className="homepage__section-title">In The Spotlight</h2>
      <div className="homepage__categories">
        {categories.map((category) => (
          <div
            key={category.category}
            className="homepage__category-circle"
            onClick={() => handleCategoryClick(category.category)}
          >
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>

      <h2 className="homepage__section-title">Recommended Products</h2>
      <div className="homepage__recommended-list">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="homepage__product-card">
            <img
              src={product.image}
              alt={product.name}
              className="homepage__product-image"
            />
            <h2 className="homepage__product-name">{product.name}</h2>
            <p className="homepage__product-price">${product.price}</p>
            <button
              className="homepage__add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="homepage__product-link"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
