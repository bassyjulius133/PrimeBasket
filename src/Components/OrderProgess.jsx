import React from "react";

const OrderProgress = () => {
  return (
    <div className="progress-container">
      <h3>Order Status</h3>

      <div className="progress-track">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>

      <p>Order Received → Packed → Shipped → Delivered</p>
      <strong>Current Status: Shipped</strong>
    </div>
  );
};

export default OrderProgress;