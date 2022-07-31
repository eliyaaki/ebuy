import React from "react";
import "./index.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div>
        <div>
          Delivery mode
          <select>
            <option>Email </option>
            <option>Phisical </option>
          </select>
        </div>
        <div>
          Shipment option
          <select>
            <option>Email </option>
            <option>Phisical </option>
          </select>
        </div>
        <button>asdasd</button>
      </div>
    </div>
  );
};

export default Checkout;
