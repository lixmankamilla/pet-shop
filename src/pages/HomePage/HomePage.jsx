import React, { useEffect, useState } from "react";
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
import { addToFavorites } from "../../store/favoritesSlice";
import "./HomePage.scss";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items);
  const [index, setIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
      image: spotlight4,
      category: "Taste of the Wild",
    },
  ];

  const customerReviews = [
    {
      text: "Great products and fast delivery! My dog loves it!",
      author: "John Doe",
      rating: 5,
    },
    {
      text: "Excellent customer service and quality items.",
      author: "Jane Smith",
      rating: 4,
    },
    {
      text: "Affordable prices and a wide selection. Highly recommend!",
      author: "Mike Johnson",
      rating: 5,
    },
    {
      text: "The quality of the toys is outstanding, and my cat can't stop playing with them!",
      author: "Sarah Brown",
      rating: 5,
    },
    {
      text: "Fast shipping and excellent packaging. Will definitely order again!",
      author: "Emily White",
      rating: 5,
    },
    {
      text: "Customer support was very helpful in finding the right products for my bird.",
      author: "Robert Green",
      rating: 4,
    },
    {
      text: "The treats are amazing! My dog is always excited when I order from here.",
      author: "Olivia Black",
      rating: 5,
    },
    {
      text: "Wide variety of options for all pets. Prices are also very reasonable.",
      author: "William Blue",
      rating: 4,
    },
  ];

  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!savedFavorites.find((item) => item.id === product.id)) {
      savedFavorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(savedFavorites));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [customerReviews.length]);

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
          <span className="custom-arrow custom-arrow-next">
            <i className="fas fa-chevron-right"></i>
          </span>
        }
        prevIcon={
          <span className="custom-arrow custom-arrow-prev">
            <i className="fas fa-chevron-left"></i>
          </span>
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
        {currentProducts.map((product) => (
          <div key={product.id} className="homepage__product-card">
            <div className="homepage__image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="homepage__product-image"
              />
            </div>
            <h2 className="homepage__product-name">{product.name}</h2>
            <p className="homepage__product-price">${product.price}</p>
            <div className="homepage__buttons">
              <button
                className="homepage__add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="homepage__add-to-favorites"
                onClick={() => handleAddToFavorites(product)}
              >
                ❤️
              </button>
              <Link
                to={`/product/${product.id}`}
                className="homepage__view-details"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="homepage__pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="homepage__pagination-button"
        >
          Previous
        </button>
        <span className="homepage__pagination-info">
          Page {currentPage} of {Math.ceil(products.length / productsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(products.length / productsPerPage)
          }
          className="homepage__pagination-button"
        >
          Next
        </button>
      </div>

      <div className="homepage__reviews">
        <h2 className="homepage__reviews-title">What Our Customers Say</h2>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
        >
          {customerReviews.map((review, i) => (
            <Carousel.Item key={i} className="homepage__review-item">
              <div
                onClick={() =>
                  handleSelect((index + 1) % customerReviews.length)
                }
              >
                <p className="homepage__review-text">"{review.text}"</p>
                <span className="homepage__review-author">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <i
                      key={j}
                      className="fas fa-star homepage__review-star"
                    ></i>
                  ))}
                  <br />
                  {review.author}
                </span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
