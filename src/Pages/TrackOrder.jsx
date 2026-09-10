import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCheck,
  FaBox,
  FaTruck,
  FaHome,
  FaArrowLeft,
  FaCreditCard,
  FaCalendarAlt
} from "react-icons/fa";

import "./TrackOrder.css";


const TrackOrder = () => {

  const navigate = useNavigate();


  /* ========================================
     ORDER STATE
  ======================================== */

  const [order, setOrder] = useState(null);


  /* ========================================
     LOAD ORDER
  ======================================== */

  useEffect(() => {

    const savedOrder =
      localStorage.getItem("primebasket-order");

    if (savedOrder) {

      try {

        setOrder(JSON.parse(savedOrder));

      } catch (error) {

        console.error(
          "Failed to load order:",
          error
        );

      }

    }

  }, []);


  /* ========================================
     NO ORDER
  ======================================== */

  if (!order) {

    return (

      <div className="tracking-page">

        <div className="tracking-empty">

          <div className="tracking-empty-icon">
            <FaBox />
          </div>

          <h1>
            No Order Found
          </h1>

          <p>
            You don't have a recent order to track.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/products")
            }
          >
            Start Shopping
          </button>

        </div>

      </div>

    );

  }


  /* ========================================
     ORDER STATUS
  ======================================== */

  const orderStatus =
    order.orderStatus || "Processing";


  /* ========================================
     PAYMENT INFORMATION
  ======================================== */

  const paymentMethod =
    order.paymentMethod || "Cash on Delivery";

  const paymentStatus =
    order.paymentStatus || "Pending";


  /* ========================================
     FORMAT ORDER DATE
  ======================================== */

  const formattedDate = order.orderDate
    ? new Date(order.orderDate).toLocaleDateString(
        "en-NG",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "Not available";


  /* ========================================
     STATUS CHECK
  ======================================== */

  const statusSteps = [
    "Order Placed",
    "Order Confirmed",
    "Processing",
    "Out for Delivery",
    "Delivered"
  ];


  const statusIndex = {
    "Order Placed": 0,
    "Confirmed": 1,
    "Processing": 2,
    "Out for Delivery": 3,
    "Delivered": 4
  };


  const currentStatusIndex =
    statusIndex[orderStatus] ?? 2;


  /* ========================================
     RETURN
  ======================================== */

  return (

    <div className="tracking-page">

      <div className="tracking-container">


        {/* ========================================
            BACK BUTTON
        ======================================== */}

        <button
          type="button"
          className="tracking-back"
          onClick={() => navigate("/")}
        >

          <FaArrowLeft />

          Back to Home

        </button>


        {/* ========================================
            HEADER
        ======================================== */}

        <div className="tracking-header">

          <div>

            <span className="tracking-label">
              PRIMEBASKET
            </span>

            <h1>
              Track Your Order
            </h1>

            <p>
              Follow your order from confirmation
              to delivery.
            </p>

          </div>


          <div className="tracking-order-id">

            <span>
              Order ID
            </span>

            <strong>
              {order.orderId}
            </strong>

          </div>

        </div>


        {/* ========================================
            ORDER STATUS CARD
        ======================================== */}

        <div className="tracking-card">


          {/* STATUS HEADER */}

          <div className="tracking-status-header">

            <div>

              <h2>
                Order Status
              </h2>

              <p>
                Current status: {orderStatus}
              </p>

            </div>

            <span className="status-badge">
              {orderStatus}
            </span>

          </div>


          {/* ========================================
              TIMELINE
          ======================================== */}

          <div className="tracking-timeline">


            {/* ORDER PLACED */}

            <div
              className={`timeline-item ${
                currentStatusIndex >= 0
                  ? "completed"
                  : ""
              }`}
            >

              <div className="timeline-icon">

                <FaCheck />

              </div>

              <div className="timeline-content">

                <h3>
                  Order Placed
                </h3>

                <p>
                  Your order has been received.
                </p>

              </div>

            </div>


            {/* ORDER CONFIRMED */}

            <div
              className={`timeline-item ${
                currentStatusIndex >= 1
                  ? "completed"
                  : ""
              }`}
            >

              <div className="timeline-icon">

                <FaCheck />

              </div>

              <div className="timeline-content">

                <h3>
                  Order Confirmed
                </h3>

                <p>
                  Your order has been confirmed.
                </p>

              </div>

            </div>


            {/* PROCESSING */}

            <div
              className={`timeline-item ${
                currentStatusIndex === 2
                  ? "active"
                  : currentStatusIndex > 2
                  ? "completed"
                  : ""
              }`}
            >

              <div className="timeline-icon">

                {currentStatusIndex > 2
                  ? <FaCheck />
                  : <FaBox />
                }

              </div>

              <div className="timeline-content">

                <h3>
                  Processing
                </h3>

                <p>
                  We're preparing your items.
                </p>

              </div>

            </div>


            {/* OUT FOR DELIVERY */}

            <div
              className={`timeline-item ${
                currentStatusIndex === 3
                  ? "active"
                  : currentStatusIndex > 3
                  ? "completed"
                  : ""
              }`}
            >

              <div className="timeline-icon">

                {currentStatusIndex > 3
                  ? <FaCheck />
                  : <FaTruck />
                }

              </div>

              <div className="timeline-content">

                <h3>
                  Out for Delivery
                </h3>

                <p>
                  Your order is on its way.
                </p>

              </div>

            </div>


            {/* DELIVERED */}

            <div
              className={`timeline-item ${
                currentStatusIndex === 4
                  ? "active"
                  : ""
              }`}
            >

              <div className="timeline-icon">

                <FaHome />

              </div>

              <div className="timeline-content">

                <h3>
                  Delivered
                </h3>

                <p>
                  Your order has been delivered.
                </p>

              </div>

            </div>


          </div>

        </div>


        {/* ========================================
            ORDER DETAILS
        ======================================== */}

        <div className="tracking-details">


          {/* ========================================
              DELIVERY INFORMATION
          ======================================== */}

          <div className="tracking-detail-card">

            <h2>
              Delivery Information
            </h2>


            <div className="detail-row">

              <span>
                Customer
              </span>

              <strong>
                {order.customer}
              </strong>

            </div>


            <div className="detail-row">

              <span>
                Phone
              </span>

              <strong>
                {order.phone}
              </strong>

            </div>


            <div className="detail-row">

              <span>
                Address
              </span>

              <strong>
                {order.address}
              </strong>

            </div>


            <div className="detail-row">

              <span>
                City
              </span>

              <strong>
                {order.city}
              </strong>

            </div>

          </div>


          {/* ========================================
              ORDER SUMMARY
          ======================================== */}

          <div className="tracking-detail-card">

            <h2>
              Order Summary
            </h2>


            <div className="detail-row">

              <span>
                Items
              </span>

              <strong>
                {order.items}
              </strong>

            </div>


            <div className="detail-row">

              <span>
                Order Date
              </span>

              <strong>
                {formattedDate}
              </strong>

            </div>


            <div className="detail-row">

              <span>
                Delivery
              </span>

              <strong>
                2–3 Business Days
              </strong>

            </div>


            {/* PAYMENT METHOD */}

            <div className="detail-row">

              <span>
                Payment Method
              </span>

              <strong>
                {paymentMethod}
              </strong>

            </div>


            {/* PAYMENT STATUS */}

            <div className="detail-row">

              <span>
                Payment Status
              </span>

              <strong
                className={
                  paymentStatus === "Paid"
                    ? "payment-paid"
                    : "payment-pending"
                }
              >
                {paymentStatus}
              </strong>

            </div>


            {/* TOTAL */}

            <div className="tracking-total">

              <span>
                Total
              </span>

              <strong>
                ₦{Number(order.total).toLocaleString()}
              </strong>

            </div>

          </div>

        </div>


        {/* ========================================
            ESTIMATED DELIVERY
        ======================================== */}

        <div className="estimated-delivery">

          <FaTruck />

          <div>

            <strong>
              Estimated Delivery
            </strong>

            <p>
              Your order should arrive within
              2–3 business days.
            </p>

          </div>

        </div>


        {/* ========================================
            ORDER DATE
        ======================================== */}

        <div className="order-date-info">

          <FaCalendarAlt />

          <span>
            Order placed on {formattedDate}
          </span>

        </div>


        {/* ========================================
            PAYMENT INFORMATION
        ======================================== */}

        <div className="payment-info-card">

          <div className="payment-info-icon">

            <FaCreditCard />

          </div>

          <div>

            <strong>
              Payment Method
            </strong>

            <p>
              {paymentMethod}
            </p>

          </div>

          <span
            className={
              paymentStatus === "Paid"
                ? "payment-status paid"
                : "payment-status pending"
            }
          >
            {paymentStatus}
          </span>

        </div>


        {/* ========================================
            CONTINUE SHOPPING
        ======================================== */}

        <button
          type="button"
          className="continue-shopping-btn"
          onClick={() =>
            navigate("/products")
          }
        >

          Continue Shopping

        </button>

      </div>

    </div>

  );

};


export default TrackOrder;