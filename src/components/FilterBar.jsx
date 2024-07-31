import React, { useState } from 'react';
import './FilterBar.css'

const FilterBar = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ location, priceRange, bedrooms });
  };

  return (
    <form className="filter-bar" onSubmit={handleFilterSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <input
        type="number"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        placeholder="Max Price"
      />
      <input
        type="number"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        placeholder="Min Bedrooms"
      />
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default FilterBar;
