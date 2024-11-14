import React, { useState } from 'react';
import '../assets/scss/pages/HBImène.scss';
import present from '../assets/images/hb-imène/je_savais_que_tu_allais_la_download_ahah.jpg';
import cagnotte from '../assets/images/hb-imène/cagnotte.png';

function HBImène() {
    const [isPresentOpen, setIsPresentOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPresentOpen(true);
    };

    return (
        <div className="hb-container">
            <h1 className="hb-title">💙 Happy Birthday Imène! 🎂</h1>
            <p className="hb-message">Wishing you a year filled with happiness, discoveries and joy. We're truly glad to have you by our side. 🌟🎉</p>
            <button className="hb-button" onClick={handleButtonClick}>Open Your Present 🎁</button>
            {isPresentOpen && (
                <div className="hb-present">
                    <h2 className="hb-present-details">LA SOFT🔥 T'OFFRES:</h2>
                    <img src={present} alt="Present" className="hb-present-image" />
                    <ul className="hb-present-details">
                        <li>Dell latitude 5480 💻</li>
                        <li>Écran 14 pouces 🖥️</li>
                        <li>Résolution 1920x1080 📏</li>
                        <li>Intel Core i5-6300U 2.4GHz 🚀</li>
                        <li>SSD 1000go 🗃️</li>
                        <li>32go RAM 📊</li>
                        <li>Intel HD Graphics 520 🎨</li>
                        <li>Windows 10 Family 🖼️</li>
                        <li>(Désolé c’est Dell) 😅</li>
                        <li>Appartient à: BubbleXGum 🍬</li>
                        <li>Revient à: LA BULLE 🫧</li>
                        <li>Titulaire: Emmi 🎀</li>
                        <li>Détenteuse: L’experte en bouillie 🍲</li>
                        <li>Propriétaire: Imène Medjanon 👑</li>
                        <li>Poid du bien: 156kg 💪</li>
                        <li>Année de naissance du bien: 1860 🕰️</li>
                        <li>Enjoy :) ✨</li>
                    </ul>
                    <h2 className="hb-present-details">Participation 🎫</h2>
                    <img src={cagnotte} alt="Present" className="hb-present-image" />
                </div>
            )}
        </div>
    );
}

export default HBImène;
