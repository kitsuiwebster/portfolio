import React from 'react';
import '../assets/scss/components/Card.scss';
import '../assets/scss/index.scss';

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.image} alt={card.nom} />
      <h2>{card.nom}</h2>
      <p>{card.type} - {card.localisation}</p>
      {card.hauteur && <p>Hauteur: {card.hauteur}</p>}
      {card.surface && <p>Surface: {card.surface}</p>}
    </div>
  );
}

export default Card;
