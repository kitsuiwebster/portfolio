import React from 'react';
import '../assets/scss/components/Card.scss';
import '../assets/scss/index.scss';

function Card({ card }) {
    const borderColor = {
        Sommet: "#009b53",
        Lac: "#00ffdd",
        Ville: "#FF4136",
        Pays: "#FF851B",
        Mer: "#0074D9",
        Océan: "#001f3f",
        Fleuve: "#7FDBFF",
        Désert: "#ffee00",
        Île: "#ba30e4"
    };

    const ribbonColors = {
        Sommet: { backgroundColor: "#009b53", color: "#fff" },
        Lac: { backgroundColor: "#00ffdd", color: "#000" },
        Ville: { backgroundColor: "#FF4136", color: "#fff" },
        Pays: { backgroundColor: "#FF851B", color: "#fff" },
        Mer: { backgroundColor: "#0074D9", color: "#fff" },
        Océan: { backgroundColor: "#001f3f", color: "#fff" },
        Fleuve: { backgroundColor: "#7FDBFF", color: "#000" },
        Désert: { backgroundColor: "#ffee00", color: "#000" },
        Île: { backgroundColor: "#ba30e4", color: "#fff" },
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
                <div className='card-title-container'>
                    <h2 className="card-title">{card.nom}</h2>
                </div>
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
