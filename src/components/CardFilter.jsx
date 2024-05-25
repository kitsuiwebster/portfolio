import React from 'react';

function CardFilter({ types, onFilterSelect }) {
  return (
    <div className="filter-container">
      {types.map(type => (
        <button key={type} onClick={() => onFilterSelect(type)} className="filter-button">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
      <button onClick={() => onFilterSelect(null)} className="filter-button">All</button>
    </div>
  );
}

export default CardFilter;
