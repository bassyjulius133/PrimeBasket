import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingBag } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            PREMIUM SHOPPING EXPERIENCE
          </span>

          <h1>
            Everything You Need,
            <span>All In One Basket.</span>
          </h1>

          <p>
            Discover premium groceries, fresh produce, beverages,
            household essentials and more — carefully selected
            for you at PrimeBasket.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="hero-btn primary-btn">
              Shop Now
              <FaArrowRight />
            </Link>

            <Link to="/products" className="hero-btn secondary-btn">
              <FaShoppingBag />
              Explore Products
            </Link>

          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>100+</strong>
              <span>Products</span>
            </div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Shopping</span>
            </div>

            <div className="hero-stat">
              <strong>100%</strong>
              <span>Quality</span>
            </div>

          </div>

        </div>


        <div className="hero-image-wrapper">

          <div className="hero-circle"></div>

          <div className="hero-image-card">

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
              alt="Fresh groceries"
              loading="eager"
              decoding="async"
            />

          </div>

          <div className="hero-floating-card">

            <div className="floating-icon">
              ✓
            </div>

            <div>
              <strong>Fresh & Quality</strong>
              <span>Always guaranteed</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;