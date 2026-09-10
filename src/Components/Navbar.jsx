import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/Images/primebasket-logo.png";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

import "./Navbar.css";


const Navbar = () => {

  // ==============================
  // CART
  // ==============================

  const { cartCount } = useCart();


  // ==============================
  // WISHLIST
  // ==============================

  const { wishlistCount } = useWishlist();


  // ==============================
  // SEARCH
  // ==============================

  const [searchTerm, setSearchTerm] = useState("");


  // ==============================
  // MOBILE MENU
  // ==============================

  const [menuOpen, setMenuOpen] = useState(false);


  const navigate = useNavigate();


  // ==============================
  // HANDLE SEARCH
  // ==============================

  const handleSearch = (e) => {

    e.preventDefault();

    const search = searchTerm.trim();

    if (!search) {
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(search)}`
    );

    setSearchTerm("");

    setMenuOpen(false);
  };


  // ==============================
  // CLOSE MENU
  // ==============================

  const closeMenu = () => {
    setMenuOpen(false);
  };


  // ==============================
  // RETURN
  // ==============================

  return (

    <nav className="navbar">

      <div className="navbar-container">


        {/* ==============================
            LOGO
        ============================== */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="PrimeBasket Premium Quality"
          />

        </Link>


        {/* ==============================
            DESKTOP NAVIGATION
        ============================== */}

        <div className="nav-links">

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
          >
            Shop
          </Link>

          <Link
            to="/order-history"
            onClick={closeMenu}
          >
            Orders
          </Link>

        </div>


        {/* ==============================
            DESKTOP SEARCH
        ============================== */}

        <form
          className="nav-search"
          onSubmit={handleSearch}
        >

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <button
            type="submit"
            aria-label="Search"
          >

            <FaSearch />

          </button>

        </form>


        {/* ==============================
            NAVBAR ACTIONS
        ============================== */}

        <div className="nav-actions">


          {/* ==============================
              WISHLIST
          ============================== */}

          <Link
            to="/wishlist"
            className="nav-icon"
            aria-label="Wishlist"
            onClick={closeMenu}
          >

            <FaHeart />

            <span className="badge">
              {wishlistCount}
            </span>

          </Link>


          {/* ==============================
              CART
          ============================== */}

          <Link
            to="/cart"
            className="nav-icon"
            aria-label="Shopping Cart"
            onClick={closeMenu}
          >

            <FaShoppingCart />

            <span className="badge">
              {cartCount}
            </span>

          </Link>


          {/* ==============================
              MOBILE MENU BUTTON
          ============================== */}

          <button
            type="button"
            className="menu-button"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

      </div>


      {/* ========================================
          MOBILE MENU
      ======================================== */}

      {menuOpen && (

        <div className="mobile-menu">


          {/* ==============================
              HOME
          ============================== */}

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>


          {/* ==============================
              SHOP
          ============================== */}

          <Link
            to="/products"
            onClick={closeMenu}
          >
            Shop
          </Link>


          {/* ==============================
              ORDER HISTORY
          ============================== */}

          <Link
            to="/order-history"
            onClick={closeMenu}
          >
            Order History
          </Link>


          {/* ==============================
              MOBILE SEARCH
          ============================== */}

          <form
            className="mobile-search"
            onSubmit={handleSearch}
          >

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <button
              type="submit"
              aria-label="Search"
            >

              <FaSearch />

            </button>

          </form>

        </div>

      )}

    </nav>

  );
};


export default Navbar;