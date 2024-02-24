import '../assets/scss/layouts/PikaLayout.scss';
import React, { useState, useEffect } from 'react';
import menuIcon from '../assets/images/menu.webp';
import { useTheme } from '../ThemeContext';

import { useTranslation } from 'react-i18next';
import ukFlag from '../assets/images/flags/uk.webp';
import frenchFlag from '../assets/images/flags/fr.webp';
import japaneseFlag from '../assets/images/flags/jp.webp';
import koreanFlag from '../assets/images/flags/kr.webp';
import italianFlag from '../assets/images/flags/it.webp';

// Social links
import gitlabLogo from '../assets/images/social/gitlab.webp';
import githubLogo from '../assets/images/social/github.webp';
import linkedinLogo from '../assets/images/social/linkedin.webp';
import xLogo from '../assets/images/social/x.webp';
import mediumLogo from '../assets/images/social/medium.webp';
import devtoLogo from '../assets/images/social/devto.webp';
import discordLogo from '../assets/images/social/discord.webp';


function copyDiscordUsername() {
    navigator.clipboard.writeText('kitsuiwebster').then(() => {
        const copiedMessage = document.createElement('div');
        copiedMessage.id = 'copiedMessage';
        copiedMessage.innerText = 'Copied to clipboard!';
        document.body.appendChild(copiedMessage);
        setTimeout(() => {
            document.body.removeChild(copiedMessage);
        }, 3000);
    });
}

function PikaLayout({ children }) {
    const { t, i18n } = useTranslation('layout');
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const getStoredLanguage = () => {
        const storedLang = localStorage.getItem('i18nextLng');
        return storedLang || 'en';
    };

    const [currentLanguage, setCurrentLanguage] = useState(getStoredLanguage());
    const [currentFlag, setCurrentFlag] = useState(currentLanguage === 'en' ? ukFlag : currentLanguage === 'fr' ? frenchFlag : currentLanguage === 'jp' ? japaneseFlag : currentLanguage === 'kr' ? koreanFlag : italianFlag);

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
        localStorage.setItem('i18nextLng', currentLanguage);
    }, [currentLanguage, i18n]);

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
        setCurrentFlag(lang === 'en' ? ukFlag : lang === 'fr' ? frenchFlag : lang === 'jp' ? japaneseFlag : lang === 'kr' ? koreanFlag : italianFlag);
        setIsLangMenuOpen(false);
    };
    

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <>
            <div className={`pikalayout ${theme}`}>
                <header className="pikalayout-header">
                    <div className='pikalayout-header-title-container'>
                        <h1 className='pikalayout-header-title'>Pikapi-Shop</h1>
                    </div>
                    <div className="pikalayout-header-mobile" onClick={toggleNav}>
                        <img loading="lazy" alt="Menu Icon" src={menuIcon} className='pikalayout-header-icon'></img>
                    </div>
                    <nav className={`pikalayout-header-nav ${isNavOpen ? 'open' : ''}`}>
                        <ul className='pikalayout-header-nav-ul'>
                            <li className="pikalayout-header-nav-ul-li"> <a className="pikalayout-header-nav-ul-li-a" href="/" >{t('header.home')}</a></li>
                            <li className="pikalayout-header-nav-ul-li"> <a className="pikalayout-header-nav-ul-li-a" href="/projects">{t('header.projects')}</a></li>
                            <li className="pikalayout-header-nav-ul-li"> <a className="pikalayout-header-nav-ul-li-a" href="/articles">{t('header.articles')}</a></li>
                            <li className="pikalayout-header-nav-ul-li"> <a className="pikalayout-header-nav-ul-li-a" href="/quiz">{t('header.quiz')}</a></li>
                            <li className="pikalayout-header-nav-ul-li"> <a className="pikalayout-header-nav-ul-li-a" href="/contact">{t('header.contact')}</a></li>
                        </ul>
                    </nav>
                    <div className="pikalayout-header-toggle">
                        <div className="pikalayout-header-toggle-language">
                            <img loading="lazy" src={currentFlag} alt="Language" onClick={toggleLangMenu} className="pikalayout-header-toggle-language-icon" />
                            {isLangMenuOpen && (
                                <div className="pikalayout-header-toggle-language-menu">
                                    {currentLanguage !== 'en' && (
                                        <img loading="lazy" className='pikalayout-header-toggle-language-menu-icon'
                                        src={ukFlag} alt="United Kingdom flag" onClick={() => changeLanguage('en')}/>
                                    )}
                                    {currentLanguage !== 'fr' && (
                                        <img loading="lazy" className='pikalayout-header-toggle-language-menu-icon'
                                        src={frenchFlag} alt="France flag" onClick={() => changeLanguage('fr')}/>
                                    )}
                                    {currentLanguage !== 'jp' && (
                                        <img loading="lazy" className='pikalayout-header-toggle-language-menu-icon'
                                        src={japaneseFlag} alt="Japanese flag" onClick={() => changeLanguage('jp')} />
                                    )}
                                    {currentLanguage !== 'kr' && (
                                        <img loading="lazy" className='pikalayout-header-toggle-language-menu-icon'
                                        src={koreanFlag} alt="Korean flag" onClick={() => changeLanguage('kr')} />
                                    )}
                                    {currentLanguage !== 'it' && (
                                        <img loading="lazy" className='pikalayout-header-toggle-language-menu-icon'
                                        src={italianFlag} alt="Italian flag" onClick={() => changeLanguage('it')} />
                                    )}
                                </div>
                            )}
                        </div>
                        <button onClick={toggleTheme} aria-label="Toggle theme" className={`pikalayout-header-toggle-theme ${theme}`}>
                        </button>
                    </div>
                </header>

                <main className='pikalayout-main'>
                    {children}
                </main>

                <footer className="pikalayout-footer">
                    <nav className="pikalayout-footer-links">
                        <a href="https://gitlab.com/kitsuiwebster" className="pikalayout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={gitlabLogo} alt="GitLab"/>
                        </a>
                        <a href="https://github.com/kitsuiwebster" className="pikalayout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={githubLogo} alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kitsuiwebster" className="pikalayout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/kitsuiwebster" className="pikalayout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={xLogo} alt="Twitter X"/>
                        </a>
                        <a href="https://kitsuiwebster.medium.com" className="pikalayout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={mediumLogo} alt="Medium"/>
                        </a>
                        <a href="https://dev.to/kitsuiwebster" className="pikalayout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={devtoLogo} alt="Dev.to"/>
                        </a>
                        <div onClick={copyDiscordUsername} className="pikalayout-footer-link">
                            <img loading="lazy" className="pikalayout-footer-link-img" src={discordLogo} alt="Discord"/>
                        </div>
                    </nav>
                    <p className='pikalayout-footer-text'>{t('footer.copyright')}</p>
                </footer>
            </div>
        </>
    );
}

export default PikaLayout;
