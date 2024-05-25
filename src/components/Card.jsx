import React from 'react';
import '../assets/scss/components/Card.scss';
import '../assets/scss/index.scss';


function Card({ card }) {
  const ribbonColors = {
      mountain: { backgroundColor: "#009b53", color: "#fff" },
      lake: { backgroundColor: "#00ffdd", color: "#000" },
      city: { backgroundColor: "#FF4136", color: "#fff" },
      country: { backgroundColor: "#ffee00", color: "#000" },
      sea: { backgroundColor: "#0074D9", color: "#fff" },
      ocean: { backgroundColor: "#001f3f", color: "#fff" },
      river: { backgroundColor: "#7FDBFF", color: "#000" }
  };

  const ribbonStyle = {
      '--ribbon-bg-color': ribbonColors[card.type].backgroundColor,
      '--ribbon-text-color': ribbonColors[card.type].color,
  };

  return (
      <div className="card-container">
          <div className="card" id={`card-${card.nom}`}>
              <h2 className="card-title">{card.nom}</h2>
              <div className="card-image-container">
                  <img src={card.image} alt={card.nom} className="card-image" />
              </div>
              <div className='card-details-container'>
                    <p className="card-localisation">{card.localisation}</p>
                    {card.population && <p className="card-detail">Population: {card.population}</p>}
                    {card.hauteur && <p className="card-detail">Hauteur: {card.hauteur}</p>}
                    {card.profondeur && <p className="card-detail">Profondeur: {card.profondeur}</p>}
                    {card.surface && <p className="card-detail">Surface: {card.surface}</p>}
                    {card.superficie && <p className="card-detail">Superficie: {card.superficie}</p>}
                    {card.longueur && <p className="card-detail">Longueur: {card.longueur}</p>}
                    {card.source && <p className="card-detail">Source: {card.source}</p>}
                </div>
              <aside style={ribbonStyle} className="ribbon2">
                  <span style={{color: ribbonColors[card.type].color}}>{card.type}</span> 
              </aside>
          </div>
      </div>
  );
}

export default Card;
