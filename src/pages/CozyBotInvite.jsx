import React from 'react';
import '../assets/scss/pages/CozyBotInvite.scss';
import cozyLogo from '../assets/images/cozybot-logo.png';

function CozyBotInvite() {
    const videoSrc = "https://www.youtube.com/embed/3q5n-jqTvsg";

    return (
        <div className="cozybotinvite">
            <div className='cozybotinvite-container'>
                <img alt="cozybot logo" src={cozyLogo} />
                <a href="https://discord.com/api/oauth2/authorize?client_id=1156917047284994178&permissions=8&scope=bot"
                   target="_blank" rel="noopener noreferrer">
                   Invite CozyBot to your server
                </a>
                <h1>Watch the CozyBot teaser 😊!</h1>
                <iframe
                    // width="560" 
                    // height="315"
                    src={videoSrc}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    );
}

export default CozyBotInvite;
