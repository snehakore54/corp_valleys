import React from 'react';
import './Styles.css'

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
      />
      <button onClick={() => onRemoveItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
