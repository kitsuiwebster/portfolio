import React from 'react';
import '../assets/scss/layouts/Layout.scss';

// Social links
import gitlabLogo from '../assets/images/social/gitlab.png';
import githubLogo from '../assets/images/social/github.png';
import linkedinLogo from '../assets/images/social/linkedin.png';
import xLogo from '../assets/images/social/x.webp';
import mediumLogo from '../assets/images/social/medium.png';
import devtoLogo from '../assets/images/social/devto.png';
import discordLogo from '../assets/images/social/discord.jpg';

function copyDiscordUsername() {
    navigator.clipboard.writeText('kitsuiwebster');
    alert('Discord username copied to clipboard!');
}

function Layout({ children }) { 
    return (
        <>
            <div className="layout">
                <header className="layout-header">
                    <h1 className='layout-header-title'>@kitsuiwebster</h1>
                    <nav>
                        <ul>
                            <li className="tab"> <a href="/" >Home</a></li>
                            <li className="tab"> <a href="/projects">Projects</a></li>
                            <li className="tab"> <a href="/articles">Articles</a></li>
                            <li className="tab"> <a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
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
                    <p>© Copyright @kitsuiwebster All Rights Reserved</p>
                </footer>
            </div>
        </>
    );
}

export default Layout;
