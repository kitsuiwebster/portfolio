import React from 'react';
import '../assets/scss/pages/CozyBotInvite.scss';
import cozyLogo from '../assets/images/cozybot-logo.png';
import backArrow from '../assets/images/back-arrow.png';
import { Link } from 'react-router-dom';

function CozyBotInvite() {
    const videoSrc = "https://www.youtube.com/embed/3q5n-jqTvsg";

    return (
        <>
            <div className='back-arrow-container'>
                <Link to="/projects/cozybot">
                    <img className='back-arrow' alt="back arrow" src={backArrow}></img>
                </Link>
            </div>
            <div className="cozybotinvite">
                <div className='cozybotinvite-container'>
                    <img className='cozybotinvite-image' alt="cozybot logo" src={cozyLogo} />
                    <div className='cozybotinvite-buttons-container'>
                        <a className='cozybotinvite-invite-button' href="https://discord.com/api/oauth2/authorize?client_id=1156917047284994178&permissions=8&scope=bot"
                        target="_blank" rel="noopener noreferrer">
                        Invite CozyBot to your Discord server
                        </a>
                        <a className='cozybotinvite-discord-button' href="https://discord.gg/Rxeh64Y73U"
                        target="_blank" rel="noopener noreferrer">
                        Join our support Discord server
                        </a>
                    </div>
                    <h1>Watch the CozyBot teaser 😊!</h1>
                    <iframe
                        src={videoSrc}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </>
    );
}

export default CozyBotInvite;
