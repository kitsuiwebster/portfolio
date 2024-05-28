import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import cardsData from '../js/cards';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import '../assets/scss/pages/AllCards.scss';

function AllCards() {
    const [filterType, setFilterType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [shuffledCards, setShuffledCards] = useState([]);

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    useEffect(() => {
        const filtered = filterType ? cardsData.filter(card => card.type === filterType) : cardsData;
        setShuffledCards(shuffleArray([...filtered]));
    }, [filterType]); // Re-shuffle and re-filter when filterType changes

    // Utility function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const downloadAllCards = async () => {
        setIsLoading(true);
        setProgress(0);
        const zip = new JSZip();
        const totalCards = shuffledCards.length;
        try {
            for (const [index, card] of shuffledCards.entries()) {
                const cardElement = document.getElementById(`card-${card.nom}`);
                await new Promise(resolve => requestAnimationFrame(resolve));
                const scale = 1920 / 175;
                const canvas = await html2canvas(cardElement, {
                    scale: scale,
                    useCORS: true
                });
                const roundedCanvas = applyRoundedCorners(canvas, scale);
                const imgData = roundedCanvas.toDataURL("image/png");
                zip.file(`${card.nom}.png`, imgData.split('base64,')[1], { base64: true });
                setProgress(((index + 1) / totalCards) * 100);
            }
            const content = await zip.generateAsync({ type: "blob" });
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = "cards.zip";
            link.click();
        } catch (error) {
            console.error('Failed to generate zip:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='all-cards-container'>
            <div className='header'>
                <h1 className='header-title'>Cartes de la Terre 🌍</h1>
                <div className='buttons-container'>
                    {isLoading && (
                        <div className="loading" style={{ color: 'white', textAlign: 'center', fontSize: '16px', marginRight: '10px' }}>
                            Préparation du téléchargement... {Math.round(progress)}%
                        </div>
                    )}
                    <button className='download-btn' onClick={downloadAllCards} disabled={isLoading}>
                        Télécharger 📥
                    </button>
                    <select onChange={handleFilterChange} className="filter-select">
                        <option value="">Tous les types</option>
                        <option value="Sommet">Sommets</option>
                        <option value="Lac">Lacs</option>
                        <option value="Ville">Villes</option>
                        <option value="Pays">Pays</option>
                        <option value="Mer">Mers</option>
                        <option value="Océan">Océans</option>
                        <option value="Fleuve">Fleuves</option>
                        <option value="Désert">Déserts</option>
                        <option value="Île">îles</option>
                    </select>
                </div>
            </div>
            <div className='cards-grid'>
                {shuffledCards.map((card, index) => (
                    <Card className="card-box" key={card.nom} card={card} />
                ))}
            </div>
        </div>
    );
}

export default AllCards;

function applyRoundedCorners(canvas, scale) {
    const width = canvas.width;
    const height = canvas.height;
    const radius = 12 * scale;

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
