import React from 'react';
import '../assets/scss/pages/CozyBotInvite.scss';
import cozyLogo from '../assets/images/cozybot-logo.png';
import BackArrow from '../components/BackArrow';
import { useTranslation } from 'react-i18next';

function CozyBotInvite() {
    const videoSrc = "https://www.youtube.com/embed/3q5n-jqTvsg";
    const { t } = useTranslation('cozybotinvite')

    return (
        <>
            <BackArrow path="/projects/cozybot"/>
            <div id="cozybotinvite">
                <div className="cozybotinvite">
                    <div className='cozybotinvite-container'>
                        <img className='cozybotinvite-image' alt="cozybot logo" src={cozyLogo} />
                        <div className='cozybotinvite-buttons-container'>
                            <a className='cozybotinvite-invite-button'
                            href="https://discord.com/api/oauth2/authorize?client_id=1156917047284994178&permissions=8&scope=bot"
                            target="_blank" rel="noopener noreferrer">{t('buttons.invite')}</a>
                            <a className='cozybotinvite-discord-button' href="https://discord.gg/Rxeh64Y73U"
                            target="_blank" rel="noopener noreferrer">{t('buttons.server')}</a>
                        </div>
                        <h1 className='cozybotinvite-h1'>{t('watch')}</h1>
                        <iframe
                            className='cozybotinvite-video'
                            src={videoSrc}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CozyBotInvite;
