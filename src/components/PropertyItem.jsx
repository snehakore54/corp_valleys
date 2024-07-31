import React from 'react';
import './PropertyItem.css'

const PropertyItem = ({ property, onAddToCart }) => {
  return (
    <div className="property-item">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <button onClick={() => onAddToCart(property)}>Book Now</button>
    </div>
  );
};

export default PropertyItem;