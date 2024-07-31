import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Header from './components/Header';
import propertiesData from './data/properties.json';
import { calculateTotal } from './utils/calculateTotal';
import styled from 'styled-components';
import './App.css'

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4; /* Light gray background */
`;

const HeaderStyled = styled.header`
  background-color: #333;
  color: white;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between sections */
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = (property) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === property.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...property, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = (formData) => {
    console.log('Checkout Form Data:', formData);
  };

  const totalCost = calculateTotal(cart);

  return (
    <AppContainer>
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <MainContent>
        {!showCheckout ? (
          <>
            <PropertyList properties={propertiesData} onAddToCart={handleAddToCart} />
            <Cart
              cartItems={cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
            <Button onClick={() => setShowCheckout(true)} className='button'>Proceed to Checkout</Button>
          </>
        ) : (
          <CheckoutForm totalCost={totalCost} onCheckout={handleCheckout} />
        )}
      </MainContent>
    </AppContainer>
  );
}

export default App;
