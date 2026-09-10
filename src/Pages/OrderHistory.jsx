import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBox,
  FaTruck,
  FaArrowLeft,
  FaShoppingBag
} from "react-icons/fa";

import "./OrderHistory.css";


const OrderHistory = () => {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);


  /* ========================================
     LOAD ORDERS
  ======================================== */

  useEffect(() => {

    const savedOrders =
      JSON.parse(
        localStorage.getItem("primebasket-orders")
      ) || [];

    setOrders(
      [...savedOrders].reverse()
    );

  }, []);


  /* ========================================
     TRACK ORDER
  ======================================== */

  const handleTrackOrder = (order) => {

    localStorage.setItem(
      "primebasket-order",
      JSON.stringify(order)
    );

    navigate("/track-order");

  };


  /* ========================================
     GO HOME
  ======================================== */

  const handleGoHome = () => {

    navigate("/");

  };


  /* ========================================
     START SHOPPING
  ======================================== */

  const handleStartShopping = () => {

    navigate("/products");

  };


  /* ========================================
     FORMAT DATE
  ======================================== */

  const formatDate = (date) => {

    if (!date) {
      return "Date unavailable";
    }

    return new Date(date).toLocaleDateString(
      "en-NG",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  };


  /* ========================================
     PAGE
  ======================================== */

  return (

    <div className="order-history-page">

      <div className="order-history-container">


        {/* ========================================
            BACK BUTTON
        ======================================== */}

        <button
          type="button"
          className="order-history-back"
          onClick={handleGoHome}
        >

          <FaArrowLeft />

          Back to Home

        </button>


        {/* ========================================
            HEADER
        ======================================== */}

        <div className="order-history-header">

          <div>

            <span>
              PRIMEBASKET
            </span>

            <h1>
              My Orders
            </h1>

            <p>
              View and track your previous orders.
            </p>

          </div>


          <FaShoppingBag
            className="history-header-icon"
          />

        </div>


        {/* ========================================
            NO ORDERS
        ======================================== */}

        {orders.length === 0 ? (

          <div className="orders-empty">

            <FaBox />

            <h2>
              No Orders Yet
            </h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <button
              type="button"
              onClick={handleStartShopping}
            >

              Start Shopping

            </button>

          </div>

        ) : (

          /* ========================================
             ORDERS LIST
          ======================================== */

          <div className="orders-list">

            {orders.map((order) => (

              <div
                className="order-history-card"
                key={order.orderId}
              >


                {/* ========================================
                    ORDER TOP
                ======================================== */}

                <div className="order-card-top">

                  <div>

                    <span>
                      Order ID
                    </span>

                    <h2>
                      {order.orderId}
                    </h2>

                  </div>


                  <span className="order-status">

                    {order.orderStatus || "Processing"}

                  </span>

                </div>


                {/* ========================================
                    ORDER DETAILS
                ======================================== */}

                <div className="order-card-details">


                  {/* CUSTOMER */}

                  <div>

                    <span>
                      Customer
                    </span>

                    <strong>
                      {order.customer}
                    </strong>

                  </div>


                  {/* ITEMS */}

                  <div>

                    <span>
                      Items
                    </span>

                    <strong>
                      {order.items}
                    </strong>

                  </div>


                  {/* TOTAL */}

                  <div>

                    <span>
                      Total
                    </span>

                    <strong>

                      ₦
                      {Number(
                        order.total
                      ).toLocaleString()}

                    </strong>

                  </div>


                  {/* PAYMENT */}

                  <div>

                    <span>
                      Payment
                    </span>

                    <strong>
                      {order.paymentMethod}
                    </strong>

                  </div>

                </div>


                {/* ========================================
                    ORDER BOTTOM
                ======================================== */}

                <div className="order-card-bottom">


                  {/* DATE */}

                  <div className="order-date">

                    <FaTruck />

                    <span>
                      {formatDate(
                        order.orderDate
                      )}
                    </span>

                  </div>


                  {/* TRACK BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      handleTrackOrder(order)
                    }
                  >

                    <FaTruck />

                    Track Order

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

};


export default OrderHistory;