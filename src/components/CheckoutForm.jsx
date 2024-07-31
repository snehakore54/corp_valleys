import React, { useState } from 'react';
import './CheckoutForm.css'

const CheckoutForm = ({ totalCost, onCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentInfo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="paymentInfo"
        value={formData.paymentInfo}
        onChange={handleChange}
        placeholder="Payment Information"
        required
      />
      <button type="submit">Confirm Booking</button>
      <div>Total Cost: ${totalCost.toFixed(2)}</div>
    </form>
  );
};

export default CheckoutForm;
