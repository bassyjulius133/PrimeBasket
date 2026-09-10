import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useWishlist } from "../Context/WishlistContext";

import "./Wishlist.css";


const Wishlist = () => {

  const navigate = useNavigate();


  // ========================================
  // WISHLIST CONTEXT
  // ========================================

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();


  // ========================================
  // EMPTY WISHLIST
  // ========================================

  if (wishlist.length === 0) {

    return (

      <div className="wishlist-page">

        <div className="empty-wishlist">

          <h2>
            Your Wishlist is Empty
          </h2>

          <p>
            You haven't added any products to your
            wishlist yet.
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>

        </div>

      </div>

    );

  }


  // ========================================
  // WISHLIST
  // ========================================

  return (

    <div className="wishlist-page">

      <h1>
        My Wishlist
      </h1>


      <div className="wishlist-container">

        {wishlist.map((item) => (

          <div
            className="wishlist-item"
            key={item.id}
          >


            {/* ========================================
                PRODUCT IMAGE
            ======================================== */}

            <img
              src={item.image}
              alt={item.name}
            />


            {/* ========================================
                PRODUCT INFORMATION
            ======================================== */}

            <div className="wishlist-info">

              <h3>
                {item.name}
              </h3>

              <p>
                ₦{Number(item.price).toLocaleString()}
              </p>

            </div>


            {/* ========================================
                VIEW PRODUCT
            ======================================== */}

            <button
              type="button"
              className="view-product-btn"
              onClick={() =>
                navigate(`/products/${item.id}`)
              }
            >

              <FaShoppingCart />

              View Product

            </button>


            {/* ========================================
                REMOVE
            ======================================== */}

            <button
              type="button"
              className="wishlist-remove-btn"
              onClick={() =>
                removeFromWishlist(item.id)
              }
              aria-label={`Remove ${item.name}`}
            >

              <FaTrash />

            </button>

          </div>

        ))}

      </div>

    </div>

  );

};


export default Wishlist;
