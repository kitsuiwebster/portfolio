import '../assets/scss/layouts/Layout.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import menuIcon from '../assets/images/menu.png'
import { useTheme } from '../ThemeContext';

import { useTranslation } from 'react-i18next';
import ukFlag from '../assets/images/flags/uk.png'
import frenchFlag from '../assets/images/flags/fr.png'
import japaneseFlag from '../assets/images/flags/jp.png'

// Social links
import gitlabLogo from '../assets/images/social/gitlab.png';
import githubLogo from '../assets/images/social/github.png';
import linkedinLogo from '../assets/images/social/linkedin.png';
import xLogo from '../assets/images/social/x.webp';
import mediumLogo from '../assets/images/social/medium.png';
import devtoLogo from '../assets/images/social/devto.png';
import discordLogo from '../assets/images/social/discord.jpg';


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

function Layout({ children }) {
    const { t, i18n } = useTranslation('layout');
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const getStoredLanguage = () => {
        const storedLang = localStorage.getItem('i18nextLng');
        return storedLang || 'en';
    };

    const [currentLanguage, setCurrentLanguage] = useState(getStoredLanguage());
    const [currentFlag, setCurrentFlag] = useState(currentLanguage === 'en' ? ukFlag : currentLanguage === 'fr' ? frenchFlag : japaneseFlag);

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
        localStorage.setItem('i18nextLng', currentLanguage);
    }, [currentLanguage, i18n]);

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
        setCurrentFlag(lang === 'en' ? ukFlag : lang === 'fr' ? frenchFlag : japaneseFlag);
        setIsLangMenuOpen(false);
    };

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <>
            <div className={`layout ${theme}`}>
                <header className="layout-header">
                    <Link to="/" className='layout-header-title-container'>
                        <h1 className='layout-header-title'>@kitsuiwebster</h1>
                    </Link>
                    <div className="layout-header-mobile" onClick={toggleNav}>
                        <img alt="Menu Icon" src={menuIcon} className='layout-header-icon'></img>
                    </div>
                    <nav className={`layout-header-nav ${isNavOpen ? 'open' : ''}`}>
                        <ul className='layout-header-nav-ul'>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/" >{t('header.home')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/projects">{t('header.projects')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/articles">{t('header.articles')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/contact">{t('header.contact')}</a></li>
                        </ul>
                    </nav>
                    <div className="layout-header-toggle">
                        <div className="layout-header-toggle-language">
                            <img src={currentFlag} alt="Language" onClick={toggleLangMenu} className="layout-header-toggle-language-icon" />
                            {isLangMenuOpen && (
                                <div className="layout-header-toggle-language-menu">
                                    {currentLanguage !== 'en' && (
                                        <img className='layout-header-toggle-language-menu-icon'
                                        src={ukFlag} alt="United Kingdom flag" onClick={() => changeLanguage('en')}/>
                                    )}
                                    {currentLanguage !== 'fr' && (
                                        <img className='layout-header-toggle-language-menu-icon'
                                        src={frenchFlag} alt="France flag" onClick={() => changeLanguage('fr')}/>
                                    )}
                                    {currentLanguage !== 'jp' && (
                                        <img className='layout-header-toggle-language-menu-icon'
                                        src={japaneseFlag} alt="Japanese flag" onClick={() => changeLanguage('jp')} />
                                    )}
                                </div>
                            )}
                        </div>
                        <button onClick={toggleTheme} className={`layout-header-toggle-theme ${theme}`}>
                        </button>
                    </div>
                </header>

                <main className='layout-main'>
                    {children}
                </main>

                <footer className="layout-footer">
                    <nav className="layout-footer-links">
                        <a href="https://gitlab.com/kitsuiwebster" className="layout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img className="layout-footer-link-img" src={gitlabLogo} alt="GitLab"/>
                        </a>
                        <a href="https://github.com/kitsuiwebster" className="layout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img className="layout-footer-link-img" src={githubLogo} alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kitsuiwebster" className="layout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img className="layout-footer-link-img" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/kitsuiwebster" className="layout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img className="layout-footer-link-img" src={xLogo} alt="Twitter X"/>
                        </a>
                        <a href="https://kitsuiwebster.medium.com" className="layout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img className="layout-footer-link-img" src={mediumLogo} alt="Medium"/>
                        </a>
                        <a href="https://dev.to/kitsuiwebster" className="layout-footer-link"  target="_blank" rel="noopener noreferrer">
                            <img className="layout-footer-link-img" src={devtoLogo} alt="Dev.to"/>
                        </a>
                        <div onClick={copyDiscordUsername} className="layout-footer-link">
                            <img className="layout-footer-link-img" src={discordLogo} alt="Discord"/>
                        </div>
                    </nav>
                    <p className='layout-footer-text'>{t('footer.copyright')}</p>
                </footer>
            </div>
        </>
    );
}

export default Layout;
