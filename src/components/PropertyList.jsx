import React, { useState } from 'react';
import PropertyItem from './PropertyItem';
import FilterBar from './FilterBar';
import './Styles.css'

const PropertyList = ({ properties, onAddToCart }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (filters) => {
    // Apply filtering logic here
    const filtered = properties.filter(property => {
      return (
        (filters.location ? property.location.includes(filters.location) : true) &&
        (filters.priceRange ? property.price <= filters.priceRange : true) &&
        (filters.bedrooms ? property.bedrooms >= filters.bedrooms : true)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyItem
            key={property.id}
            property={property}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
