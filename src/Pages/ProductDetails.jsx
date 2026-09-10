import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

import products from "../Data/Products";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

import "./ProductDetails.css";


const ProductDetails = () => {

  // ==============================
  // URL PARAMETER
  // ==============================

  const { id } = useParams();

  const navigate = useNavigate();


  // ==============================
  // CART
  // ==============================

  const { addToCart } = useCart();


  // ==============================
  // WISHLIST
  // ==============================

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();


  // ==============================
  // FIND PRODUCT
  // ==============================

  const product = products.find(
    (item) => item.id === Number(id)
  );


  // ==============================
  // PRODUCT NOT FOUND
  // ==============================

  if (!product) {

    return (

      <main className="product-not-found">

        <h1>
          Product Not Found
        </h1>

        <p>
          Sorry, we couldn't find the product you're looking for.
        </p>

        <button
          type="button"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>

      </main>

    );

  }


  // ==============================
  // ADD TO CART
  // ==============================

  const handleAddToCart = () => {

    addToCart(product);

    toast.success(
      `${product.name} added to cart!`
    );

  };


  // ==============================
  // WISHLIST
  // ==============================

  const handleWishlist = () => {

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


  return (

    <main className="product-details-page">


      {/* ==============================
          BACK BUTTON
      ============================== */}

      <button
        className="back-button"
        type="button"
        onClick={() => navigate("/products")}
      >

        <FaArrowLeft />

        Back to Products

      </button>



      {/* ==============================
          PRODUCT DETAILS
      ============================== */}

      <section className="product-details">


        {/* ==============================
            PRODUCT IMAGE
        ============================== */}

        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>



        {/* ==============================
            PRODUCT INFORMATION
        ============================== */}

        <div className="product-details-info">


          {/* CATEGORY */}

          <span className="details-category">
            {product.category}
          </span>


          {/* PRODUCT NAME */}

          <h1>
            {product.name}
          </h1>


          {/* RATING */}

          <div className="details-rating">

            ⭐ {product.rating}

            <span>
              / 5
            </span>

          </div>


          {/* PRICE */}

          <div className="details-price">

            ₦{product.price.toLocaleString()}

          </div>


          {/* DESCRIPTION */}

          <p className="details-description">

            {product.description}

          </p>


          {/* ACTIONS */}

          <div className="details-actions">


            {/* ADD TO CART */}

            <button
              className="details-cart-button"
              type="button"
              onClick={handleAddToCart}
            >

              <FaShoppingCart />

              Add to Cart

            </button>


            {/* WISHLIST */}

            <button
              className={`details-wishlist-button ${
                isInWishlist(product.id)
                  ? "wishlist-active"
                  : ""
              }`}
              type="button"
              onClick={handleWishlist}
            >

              <FaHeart />

              {isInWishlist(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}

            </button>

          </div>


          {/* PRODUCT INFORMATION */}

          <div className="product-extra-info">

            <div>
              <strong>
                Category:
              </strong>

              <span>
                {product.category}
              </span>
            </div>


            <div>
              <strong>
                Product Rating:
              </strong>

              <span>
                ⭐ {product.rating} / 5
              </span>
            </div>


            <div>
              <strong>
                Product ID:
              </strong>

              <span>
                #{product.id}
              </span>
            </div>

          </div>


        </div>

      </section>

    </main>

  );

};


export default ProductDetails;
