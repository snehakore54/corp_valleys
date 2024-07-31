import React from 'react';
import './CartSummary.css'

const CartSummary = ({ items }) => {
  const totalCost = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const bookingCount = items.length;

  return (
    <div className="cart-summary">
      <h3>Summary</h3>
      <p>Number of Properties: {bookingCount}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
