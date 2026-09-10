import { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { toast } from "react-toastify";

import "./ProductCard.css";


const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const navigate = useNavigate();


  // ========================================
  // IMAGE LOADING STATE
  // ========================================

  const [imageLoading, setImageLoading] = useState(true);

  const [imageError, setImageError] = useState(false);


  // ========================================
  // PRODUCT DETAILS
  // ========================================

  const handleProductClick = () => {

    navigate("/products/" + product.id);

  };


  // ========================================
  // ADD TO CART
  // ========================================

  const handleAddToCart = (e) => {

    e.stopPropagation();

    addToCart(product);

    toast.success(
      `${product.name} added to cart!`
    );

  };


  // ========================================
  // WISHLIST
  // ========================================

  const handleWishlist = (e) => {

    e.stopPropagation();

    if (isInWishlist(product.id)) {

      removeFromWishlist(product.id);

      toast.info(
        `${product.name} removed from wishlist`
      );

    } else {

      addToWishlist(product);

      toast.success(
        `${product.name} added to wishlist ❤️`
      );

    }

  };


  // ========================================
  // IMAGE LOADED
  // ========================================

  const handleImageLoad = () => {

    setImageLoading(false);

  };


  // ========================================
  // IMAGE ERROR
  // ========================================

  const handleImageError = () => {

    setImageLoading(false);

    setImageError(true);

  };


  return (

    <article
      className="product-card"
      onClick={handleProductClick}
    >


      {/* ========================================
          IMAGE SECTION
      ======================================== */}

      <div className="product-image">


        {/* IMAGE LOADING PLACEHOLDER */}

        {imageLoading && (

          <div className="image-loading">

            <div className="image-spinner"></div>

          </div>

        )}


        {/* PRODUCT IMAGE */}

        {!imageError ? (

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />

        ) : (

          /* IMAGE ERROR FALLBACK */

          <div className="image-error">

            🛒

            <span>
              Image unavailable
            </span>

          </div>

        )}


        {/* WISHLIST */}

        <button
          type="button"
          className={`wishlist-button ${
            isInWishlist(product.id)
              ? "wishlist-active"
              : ""
          }`}
          onClick={handleWishlist}
          aria-label={
            isInWishlist(product.id)
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >

          <FaHeart />

        </button>


        {/* CATEGORY BADGE */}

        <span className="image-category">

          {product.category}

        </span>

      </div>



      {/* ========================================
          PRODUCT INFORMATION
      ======================================== */}

      <div className="product-info">


        {/* RATING */}

        <div className="product-rating">

          <FaStar />

          <span>
            {product.rating}
          </span>

          <span className="rating-text">
            Excellent
          </span>

        </div>


        {/* PRODUCT NAME */}

        <h3>
          {product.name}
        </h3>


        {/* DESCRIPTION */}

        <p className="product-description">

          {product.description}

        </p>


        {/* ========================================
            BOTTOM
        ======================================== */}

        <div className="product-bottom">


          {/* PRICE */}

          <div className="price-section">

            <span className="price-label">
              Price
            </span>

            <span className="product-price">

              ₦{product.price.toLocaleString()}

            </span>

          </div>


          {/* ADD TO CART */}

          <button
            type="button"
            className="add-to-cart"
            onClick={handleAddToCart}
          >

            <FaShoppingCart />

            <span>
              Add
            </span>

          </button>

        </div>


      </div>

    </article>

  );

};


export default ProductCard;