import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

import "./Cart.css";

const Cart = () => {

  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();


  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="cart-page">

        <div className="empty-cart">

          <h2>
            Your Cart is Empty
          </h2>

          <p>
            You haven't added any products to your cart yet.
          </p>

        </div>

      </div>
    );
  }


  return (
    <div className="cart-page">

      <h1>
        Your Shopping Cart
      </h1>


      <div className="cart-container">


        {/* ================= CART ITEMS ================= */}

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >


              {/* Product Image */}

              <img
                src={item.image}
                alt={item.name}
              />


              {/* Product Information */}

              <div className="cart-item-info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₦{item.price.toLocaleString()}
                </p>

              </div>


              {/* Quantity Controls */}

              <div className="quantity-controls">

                <button
                  type="button"
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>


                <span>
                  {item.quantity}
                </span>


                <button
                  type="button"
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>

              </div>


              {/* Item Total */}

              <div className="item-total">

                ₦{(
                  item.price * item.quantity
                ).toLocaleString()}

              </div>


              {/* Remove Item */}

              <button
                type="button"
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
                aria-label={`Remove ${item.name}`}
              >
                <FaTrash />
              </button>

            </div>

          ))}

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>


          {/* Subtotal */}

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <strong>
              ₦{cartTotal.toLocaleString()}
            </strong>

          </div>


          {/* Delivery */}

          <div className="summary-row">

            <span>
              Delivery
            </span>

            <strong>
              Free
            </strong>

          </div>


          <hr />


          {/* Total */}

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ₦{cartTotal.toLocaleString()}
            </strong>

          </div>


          {/* Checkout */}

          <button
            type="button"
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};


export default Cart;