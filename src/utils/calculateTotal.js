// utils/calculateTotal.js

/**
 * Calculates the total cost of booked properties.
 * @param {Array} cartItems - Array of objects representing items in the cart.
 * @returns {number} - Total cost.
 */
export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };