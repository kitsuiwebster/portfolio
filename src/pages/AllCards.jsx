import React, { useState } from 'react';
import Card from '../components/Card';
import cardsData from '../js/cards';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import '../assets/scss/pages/AllCards.scss';

function AllCards() {
    const [filterType, setFilterType] = useState('');

    const downloadAllCards = async () => {
        const zip = new JSZip();
        for (const card of cardsData) {
            const cardElement = document.getElementById(`card-${card.nom}`);
            const scale = 1920 / 175;
            const canvas = await html2canvas(cardElement, {
                scale: scale,
                useCORS: true
            });
            const roundedCanvas = applyRoundedCorners(canvas, scale);
            const imgData = roundedCanvas.toDataURL("image/png");
            zip.file(`${card.nom}.png`, imgData.split('base64,')[1], { base64: true });
        }

        zip.generateAsync({ type: "blob" }).then(function(content) {
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = "cards.zip";
            link.click();
        });
    };

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    const filteredCards = filterType ? cardsData.filter(card => card.type === filterType) : cardsData;

    return (
        <div className='all-cards-container'>
            <div className='header'>
                <h1 className='header-title'>Earth Cards 🌍</h1>
                <div className='buttons-container'>
                    <button className='download-btn' onClick={downloadAllCards}>Download All 📥</button>
                    <select onChange={handleFilterChange} className="filter-select">
                        <option value="">All Types</option>
                        <option value="mountain">Mountains</option>
                        <option value="lake">Lakes</option>
                        <option value="city">Cities</option>
                        <option value="country">Countries</option>
                        <option value="sea">Seas</option>
                        <option value="ocean">Oceans</option>
                        <option value="river">Rivers</option>
                    </select>
                </div>
            </div>
            <div className='cards-grid'>
                {filteredCards.map((card, index) => (
                    <Card className="card-box" key={index} card={card} />
                ))}
            </div>
        </div>
    );
}

export default AllCards;

function applyRoundedCorners(canvas, scale) {
    const width = canvas.width;
    const height = canvas.height;
    const radius = 20 * scale;

    const roundedCanvas = document.createElement('canvas');
    roundedCanvas.width = width;
    roundedCanvas.height = height;
    const roundedCtx = roundedCanvas.getContext('2d');

    roundedCtx.beginPath();
    roundedCtx.moveTo(radius, 0);
    roundedCtx.lineTo(width - radius, 0);
    roundedCtx.quadraticCurveTo(width, 0, width, radius);
    roundedCtx.lineTo(width, height - radius);
    roundedCtx.quadraticCurveTo(width, height, width - radius, height);
    roundedCtx.lineTo(radius, height);
    roundedCtx.quadraticCurveTo(0, height, 0, height - radius);
    roundedCtx.lineTo(0, radius);
    roundedCtx.quadraticCurveTo(0, 0, radius, 0);
    roundedCtx.closePath();
    roundedCtx.clip();
    roundedCtx.drawImage(canvas, 0, 0);

    return roundedCanvas;
}
