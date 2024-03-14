import '../assets/scss/layouts/Layout.scss';
import React, { useState, useEffect } from 'react';
import menuIcon from '../assets/images/menu.webp';
import { useTheme } from '../ThemeContext';
import logo from '../assets/images/logo.webp'
// Languages
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
            <div className={`layout ${theme}`}>
                <header className="layout-header">
                    <div className='layout-header-title-container'>
                        <img className='layout-header-logo' src={logo} alt='kitsuiwebster logo Raphaël Martin'></img>
                        <h1 className='layout-header-title'>@kitsuiwebster</h1>
                    </div>
                    <div className="layout-header-mobile" onClick={toggleNav}>
                        <img loading="lazy" alt="Menu Icon" src={menuIcon} className='layout-header-icon'></img>
                    </div>
                    <nav className={`layout-header-nav ${isNavOpen ? 'open' : ''}`}>
                        <ul className='layout-header-nav-ul'>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/" >{t('header.home')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/projects">{t('header.projects')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/articles">{t('header.articles')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/quiz">{t('header.quiz')}</a></li>
                            <li className="layout-header-nav-ul-li"> <a className="layout-header-nav-ul-li-a" href="/contact">{t('header.contact')}</a></li>
                        </ul>
                    </nav>
                    <div className="layout-header-toggle">
                        <div className="layout-header-toggle-language">
                            <img loading="lazy" src={currentFlag} alt="Language" onClick={toggleLangMenu} className="layout-header-toggle-language-icon" />
                            {isLangMenuOpen && (
                                <div className="layout-header-toggle-language-menu">
                                    {currentLanguage !== 'en' && (
                                        <img loading="lazy" className='layout-header-toggle-language-menu-icon'
                                        src={ukFlag} alt="United Kingdom flag" onClick={() => changeLanguage('en')}/>
                                    )}
                                    {currentLanguage !== 'fr' && (
                                        <img loading="lazy" className='layout-header-toggle-language-menu-icon'
                                        src={frenchFlag} alt="France flag" onClick={() => changeLanguage('fr')}/>
                                    )}
                                    {currentLanguage !== 'jp' && (
                                        <img loading="lazy" className='layout-header-toggle-language-menu-icon'
                                        src={japaneseFlag} alt="Japanese flag" onClick={() => changeLanguage('jp')} />
                                    )}
                                    {currentLanguage !== 'kr' && (
                                        <img loading="lazy" className='layout-header-toggle-language-menu-icon'
                                        src={koreanFlag} alt="Korean flag" onClick={() => changeLanguage('kr')} />
                                    )}
                                    {currentLanguage !== 'it' && (
                                        <img loading="lazy" className='layout-header-toggle-language-menu-icon'
                                        src={italianFlag} alt="Italian flag" onClick={() => changeLanguage('it')} />
                                    )}
                                </div>
                            )}
                        </div>
                        <button onClick={toggleTheme} aria-label="Toggle theme" className={`layout-header-toggle-theme ${theme}`}>
                        </button>
                    </div>
                </header>

                <main className='layout-main'>
                    {children}
                </main>

                <footer className="layout-footer">
                    <nav className="layout-footer-links">
                    </nav>
                    <p className='layout-footer-text'>{t('footer.copyright')}</p>
                </footer>
            </div>
        </>
    );
}

export default Layout;
