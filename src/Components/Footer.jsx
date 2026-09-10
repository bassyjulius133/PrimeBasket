import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="prime-footer">

      {/* NEWSLETTER */}
      <section className="footer-newsletter">

        <div className="newsletter-content">
          <span className="footer-label">
            STAY IN THE LOOP
          </span>

          <h2>
            Fresh deals, straight to your inbox.
          </h2>

          <p>
            Subscribe to PrimeBasket and be the first to
            know about new products, special offers and
            exclusive deals.
          </p>
        </div>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>
        </form>

      </section>


      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            Prime<span>Basket</span>
          </Link>

          <p>
            Your trusted online supermarket for fresh
            groceries, quality products and everyday
            essentials delivered right to your door.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

          </div>

        </div>


        {/* SHOP */}
        <div className="footer-column">

          <h3>Shop</h3>

          <Link to="/products">
            All Products
          </Link>

          <Link to="/products">
            Groceries
          </Link>

          <Link to="/products">
            Fresh Produce
          </Link>

          <Link to="/products">
            Beverages
          </Link>

          <Link to="/products">
            Household
          </Link>

        </div>


        {/* CUSTOMER SERVICE */}
        <div className="footer-column">

          <h3>Customer Service</h3>

          <Link to="/contact">
            Contact Us
          </Link>

          <Link to="/products">
            Delivery Information
          </Link>

          <Link to="/products">
            Returns & Refunds
          </Link>

          <Link to="/products">
            FAQs
          </Link>

          <Link to="/checkout">
            Checkout
          </Link>

        </div>


        {/* ACCOUNT */}
        <div className="footer-column">

          <h3>My Account</h3>

          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Create Account
          </Link>

          <Link to="/wishlist">
            My Wishlist
          </Link>

          <Link to="/cart">
            Shopping Cart
          </Link>

        </div>

      </div>


      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">

        <p>
          © 2026 PrimeBasket. All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
