import React from 'react';
import '../assets/scss/components/CardFilter.scss';
import '../assets/scss/index.scss';

function CardFilter({ types, onFilterSelect }) {
  return (
    <div>
      {types.map(type => (
        <button key={type} onClick={() => onFilterSelect(type)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
      <button onClick={() => onFilterSelect(null)}>All</button>
    </div>
  );
}

export default CardFilter;
