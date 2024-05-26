import React from 'react';
import '../assets/scss/components/Card.scss';
import '../assets/scss/index.scss';

function Card({ card }) {
    const borderColor = {
        Mountain: "#009b53",
        Lake: "#00ffdd",
        City: "#FF4136",
        Country: "#FF851B",
        Sea: "#0074D9",
        Ocean: "#001f3f",
        River: "#7FDBFF",
        Desert: "#ffee00",
        Island: "#ba30e4"
    };

    const ribbonColors = {
        Mountain: { backgroundColor: "#009b53", color: "#fff" },
        Lake: { backgroundColor: "#00ffdd", color: "#000" },
        City: { backgroundColor: "#FF4136", color: "#fff" },
        Country: { backgroundColor: "#FF851B", color: "#fff" },
        Sea: { backgroundColor: "#0074D9", color: "#fff" },
        Ocean: { backgroundColor: "#001f3f", color: "#fff" },
        River: { backgroundColor: "#7FDBFF", color: "#000" },
        Desert: { backgroundColor: "#ffee00", color: "#000" },
        Island: { backgroundColor: "#ba30e4", color: "#fff" },
    };

    const ribbonStyle = {
        '--ribbon-bg-color': ribbonColors[card.type].backgroundColor,
        '--ribbon-text-color': ribbonColors[card.type].color,
    };

    // Applying the border color directly to the card-container
    const containerStyle = {
        borderColor: borderColor[card.type]
    };

    return (
        <div className="card-container" style={containerStyle} id={`card-${card.nom}`}>
            <div className="card">
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
                <aside className="ribbon2" style={ribbonStyle}>
                    <span style={{color: ribbonColors[card.type].color}}>{card.type} {card.emoji}</span>
                </aside>
            </div>
        </div>
    );
}

export default Card;
