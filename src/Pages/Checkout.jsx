import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCheck,
  FaTimes,
  FaHome,
  FaTruck,
  FaMoneyBillWave,
  FaCreditCard,
  FaUniversity
} from "react-icons/fa";

import { useCart } from "../Context/CartContext";

import "./Checkout.css";


const Checkout = () => {

  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    clearCart,
  } = useCart();


  /* ========================================
     CUSTOMER FORM
  ======================================== */

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });


  /* ========================================
     PAYMENT METHOD
  ======================================== */

  const [paymentMethod, setPaymentMethod] = useState(
    "Cash on Delivery"
  );


  /* ========================================
     ORDER SUCCESS
  ======================================== */

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [orderId, setOrderId] = useState("");

  const [orderDetails, setOrderDetails] = useState({
    total: 0,
    items: 0,
    paymentMethod: "",
  });


  /* ========================================
     HANDLE INPUT
  ======================================== */

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

  };


  /* ========================================
     PLACE ORDER
  ======================================== */

  const handleSubmit = (e) => {

    e.preventDefault();


    /* ========================================
       CALCULATE ORDER
    ======================================== */

    const totalAmount = Number(cartTotal);

    const totalItems = cart.reduce(
      (total, item) => {
        return total + Number(item.quantity);
      },
      0
    );


    /* ========================================
       GENERATE ORDER ID
    ======================================== */

    const newOrderId =
      `#PB-${Date.now().toString().slice(-6)}`;


    /* ========================================
       ORDER DATE
    ======================================== */

    const orderDate =
      new Date().toISOString();


    /* ========================================
       CREATE COMPLETE ORDER
    ======================================== */

    const newOrder = {

      orderId: newOrderId,

      customer: formData.name,

      phone: formData.phone,

      address: formData.address,

      city: formData.city,

      items: totalItems,

      total: totalAmount,

      paymentMethod: paymentMethod,

      paymentStatus: "Pending",

      orderStatus: "Processing",

      orderDate: orderDate,

    };


    /* ========================================
       SAVE ALL ORDERS
    ======================================== */

    const existingOrders =
      JSON.parse(
        localStorage.getItem("primebasket-orders")
      ) || [];


    existingOrders.push(newOrder);


    localStorage.setItem(
      "primebasket-orders",
      JSON.stringify(existingOrders)
    );


    /* ========================================
       SAVE LATEST ORDER
       FOR TRACK ORDER PAGE
    ======================================== */

    localStorage.setItem(
      "primebasket-order",
      JSON.stringify(newOrder)
    );


    /* ========================================
       SAVE SUCCESS DETAILS
    ======================================== */

    setOrderId(newOrderId);

    setOrderDetails({

      total: totalAmount,

      items: totalItems,

      paymentMethod: paymentMethod,

    });


    /* ========================================
       SHOW SUCCESS SCREEN
    ======================================== */

    setOrderPlaced(true);


    /* ========================================
       CLEAR CART
    ======================================== */

    clearCart();

  };


  /* ========================================
     GO HOME
  ======================================== */

  const handleGoHome = () => {

    setOrderPlaced(false);

    navigate("/");

  };


  /* ========================================
     TRACK ORDER
  ======================================== */

  const handleTrackOrder = () => {

    setOrderPlaced(false);

    navigate("/track-order");

  };


  /* ========================================
     CLOSE SUCCESS SCREEN
  ======================================== */

  const handleCloseSuccess = () => {

    setOrderPlaced(false);

    navigate("/");

  };


  /* ========================================
     EMPTY CART
  ======================================== */

  if (cart.length === 0 && !orderPlaced) {

    return (

      <div className="checkout-page">

        <div className="checkout-empty">

          <h2>
            Your Cart is Empty
          </h2>

          <p>
            Please add products to your cart
            before checking out.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/products")
            }
          >
            Continue Shopping
          </button>

        </div>

      </div>

    );

  }


  /* ========================================
     SUCCESS SCREEN
  ======================================== */

  if (orderPlaced) {

    return (

      <div className="order-success-page">

        <div className="order-success-card">


          {/* ========================================
              CLOSE BUTTON
          ======================================== */}

          <button
            type="button"
            className="success-close"
            onClick={handleCloseSuccess}
            aria-label="Close"
          >

            <FaTimes />

          </button>


          {/* ========================================
              SUCCESS ICON
          ======================================== */}

          <div className="success-icon">

            <FaCheck />

          </div>


          {/* ========================================
              SUCCESS TITLE
          ======================================== */}

          <h1>

            ORDER PLACED
            <br />
            SUCCESSFULLY!

          </h1>


          {/* ========================================
              SUCCESS MESSAGE
          ======================================== */}

          <p className="success-message">

            Thank you for shopping with PrimeBasket.
            Your order has been successfully received
            and is being prepared for delivery.

          </p>


          {/* ========================================
              ORDER SUMMARY
          ======================================== */}

          <div className="success-summary">

            <h2>
              Order Summary
            </h2>


            {/* ORDER ID */}

            <div className="success-row">

              <span>
                Order ID
              </span>

              <strong>
                {orderId}
              </strong>

            </div>


            {/* CUSTOMER */}

            <div className="success-row">

              <span>
                Customer
              </span>

              <strong>
                {formData.name}
              </strong>

            </div>


            {/* ITEMS */}

            <div className="success-row">

              <span>
                Items
              </span>

              <strong>
                {orderDetails.items}
              </strong>

            </div>


            {/* DELIVERY */}

            <div className="success-row">

              <span>
                Delivery
              </span>

              <strong>
                2–3 Business Days
              </strong>

            </div>


            {/* ADDRESS */}

            <div className="success-row">

              <span>
                Address
              </span>

              <strong>
                {formData.city}
              </strong>

            </div>


            {/* PAYMENT METHOD */}

            <div className="success-row">

              <span>
                Payment
              </span>

              <strong>
                {orderDetails.paymentMethod}
              </strong>

            </div>


            {/* TOTAL */}

            <div className="success-total">

              <span>
                Total
              </span>

              <strong>
                ₦{orderDetails.total.toLocaleString()}
              </strong>

            </div>

          </div>


          {/* ========================================
              DELIVERY MESSAGE
          ======================================== */}

          <div className="delivery-note">

            <div className="delivery-note-icon">

              <FaTruck />

            </div>


            <div>

              <strong>
                Your order is on its way
              </strong>

              <p>
                We'll prepare your items and
                deliver them to your address.
              </p>

            </div>

          </div>


          {/* ========================================
              GO HOME
          ======================================== */}

          <button
            type="button"
            className="success-home-btn"
            onClick={handleGoHome}
          >

            <FaHome />

            Go To Home

          </button>


          {/* ========================================
              TRACK ORDER
          ======================================== */}

          <button
            type="button"
            className="success-track-btn"
            onClick={handleTrackOrder}
          >

            Track Order

          </button>

        </div>

      </div>

    );

  }


  /* ========================================
     CHECKOUT PAGE
  ======================================== */

  return (

    <div className="checkout-page">


      <h1>
        Checkout
      </h1>


      <div className="checkout-container">


        {/* ========================================
            DELIVERY INFORMATION
        ======================================== */}

        <div className="checkout-form">

          <h2>
            Delivery Information
          </h2>


          <form onSubmit={handleSubmit}>


            {/* FULL NAME */}

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            {/* ADDRESS */}

            <div className="form-group">

              <label htmlFor="address">
                Delivery Address
              </label>

              <textarea
                id="address"
                name="address"
                placeholder="Enter your delivery address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                required
              />

            </div>


            {/* CITY */}

            <div className="form-group">

              <label htmlFor="city">
                City
              </label>

              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />

            </div>


            {/* ========================================
                PAYMENT METHOD
            ======================================== */}

            <div className="payment-section">

              <h2>
                Payment Method
              </h2>

              <p className="payment-description">
                Choose how you would like to pay
                for your order.
              </p>


              <div className="payment-options">


                {/* CASH ON DELIVERY */}

                <label
                  className={`payment-option ${
                    paymentMethod === "Cash on Delivery"
                      ? "selected"
                      : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={
                      paymentMethod === "Cash on Delivery"
                    }
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div className="payment-icon">

                    <FaMoneyBillWave />

                  </div>

                  <div className="payment-info">

                    <strong>
                      Cash on Delivery
                    </strong>

                    <span>
                      Pay when your order arrives
                    </span>

                  </div>

                </label>


                {/* CARD PAYMENT */}

                <label
                  className={`payment-option ${
                    paymentMethod === "Card Payment"
                      ? "selected"
                      : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Card Payment"
                    checked={
                      paymentMethod === "Card Payment"
                    }
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div className="payment-icon">

                    <FaCreditCard />

                  </div>

                  <div className="payment-info">

                    <strong>
                      Card Payment
                    </strong>

                    <span>
                      Pay securely with your card
                    </span>

                  </div>

                </label>


                {/* BANK TRANSFER */}

                <label
                  className={`payment-option ${
                    paymentMethod === "Bank Transfer"
                      ? "selected"
                      : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank Transfer"
                    checked={
                      paymentMethod === "Bank Transfer"
                    }
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div className="payment-icon">

                    <FaUniversity />

                  </div>

                  <div className="payment-info">

                    <strong>
                      Bank Transfer
                    </strong>

                    <span>
                      Pay directly from your bank
                    </span>

                  </div>

                </label>


              </div>

            </div>


            {/* PLACE ORDER */}

            <button
              type="submit"
              className="place-order-btn"
            >

              Place Order

            </button>

          </form>

        </div>


        {/* ========================================
            ORDER SUMMARY
        ======================================== */}

        <div className="checkout-summary">

          <h2>
            Your Order
          </h2>


          <div className="checkout-items">

            {cart.map((item) => (

              <div
                className="checkout-item"
                key={item.id}
              >

                <div className="checkout-product-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>
                    {item.quantity}
                  </span>

                </div>


                <div className="checkout-item-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₦{Number(item.price).toLocaleString()}
                  </p>

                </div>


                <strong>

                  ₦{(
                    Number(item.price) *
                    item.quantity
                  ).toLocaleString()}

                </strong>

              </div>

            ))}

          </div>


          <hr />


          {/* SUBTOTAL */}

          <div className="checkout-row">

            <span>
              Subtotal
            </span>

            <strong>
              ₦{Number(cartTotal).toLocaleString()}
            </strong>

          </div>


          {/* DELIVERY */}

          <div className="checkout-row">

            <span>
              Delivery
            </span>

            <strong className="free-delivery">
              Free
            </strong>

          </div>


          <hr />


          {/* TOTAL */}

          <div className="checkout-total">

            <span>
              Total
            </span>

            <strong>
              ₦{Number(cartTotal).toLocaleString()}
            </strong>

          </div>


          {/* SELECTED PAYMENT */}

          <div className="selected-payment">

            <span>
              Payment Method
            </span>

            <strong>
              {paymentMethod}
            </strong>

          </div>

        </div>

      </div>

    </div>

  );

};


export default Checkout;