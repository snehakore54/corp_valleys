import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './Styles.css'


const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}
      <CartSummary items={cartItems} />
    </div>
  );
};

export default Cart;
