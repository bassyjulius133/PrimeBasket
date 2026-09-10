import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* Wishlist Button */}
        <button
          className="wishlist-button"
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <FaHeart />
        </button>
      </div>

      {/* Product Information */}
      <div className="product-info">

        {/* Category */}
        <span className="product-category">
          {product.category}
        </span>

        {/* Product Name */}
        <Link
          to={`/products/${product.id}`}
          className="product-link"
        >
          <h3 className="product-name">
            {product.name}
          </h3>
        </Link>

        {/* Price and Cart Button */}
        <div className="product-bottom">

          <h4 className="product-price">
            ₦{Number(product.price).toLocaleString()}
          </h4>

          <button
            className="add-cart-button"
            type="button"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>

        </div>
      </div>

    </div>
  );
};

export default ProductCard;