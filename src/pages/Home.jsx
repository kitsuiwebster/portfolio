import React from 'react';
import '../assets/scss/pages/Home.scss';
import profilePicture from '../assets/images/profile-picture.jpg'; 
import '../assets/scss/index.scss'

// Technos links
import chatGptLogo from '../assets/images/technos/chat-gpt.png'; 
import claudeLogo from '../assets/images/technos/claude.webp';
import bardLogo from '../assets/images/technos/bard.svg';
import midjourneyLogo from '../assets/images/technos/midjourney.png';
import mistralLogo from '../assets/images/technos/mistral.png';
import htmlLogo from '../assets/images/technos/html.png';
import cssLogo from '../assets/images/technos/css.png';
import sassLogo from '../assets/images/technos/sass.png';
import reactLogo from '../assets/images/technos/react.png';
import nodeLogo from '../assets/images/technos/node.png';
import jsLogo from '../assets/images/technos/js.png';
import tsLogo from '../assets/images/technos/ts.png';
import pythonLogo from '../assets/images/technos/python.png';

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

function Home() {
    return (
        <div id="home">
            <div className="home">
                <header className="home-header">
                    <div className="home-header-text">
                        <h1 className="home-header-title">Raphaël MARTIN</h1>
                        <h2 className="home-header-subtitle">IT Freelance, Prompt Engineer, Developer</h2>
                        <p className="home-header-bio">
                            Passionate about IT, convinced by the values of opensource,
                            I am continually training and seeking out projects that resonate with me.
                            As a great self-taught,
                            I have already developed a wide range of skills since I was very young around this field and always thirsty for knowledge,
                            I never stop evolving in IT.</p>
                    </div>
                    <img src={profilePicture} alt="Raphaël Martin" className="home-header-profilepic"/>
                </header>

                <section className="home-social">
                    <nav className="home-social-links">
                        <a href="https://gitlab.com/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img className="home-social-link-img" src={gitlabLogo} alt="GitLab"/>
                        </a>
                        <a href="https://github.com/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img className="home-social-link-img" src={githubLogo} alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img className="home-social-link-img" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img className="home-social-link-img" src={xLogo} alt="Twitter X"/>
                        </a>
                        <a href="https://kitsuiwebster.medium.com" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img className="home-social-link-img" src={mediumLogo} alt="Medium"/>
                        </a>
                        <a href="https://dev.to/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img className="home-social-link-img" src={devtoLogo} alt="Dev.to"/>
                        </a>
                        <div onClick={copyDiscordUsername} className="home-social-link">
                            <img className="home-social-link-img" src={discordLogo} alt="Discord"/>
                        </div>
                    </nav>
                </section>

                <section className="home-skills">
                    <h2 className="home-skills-title">Skills</h2>
                    <h3 className="home-skills-titles">AI</h3>
                    <div className="home-skills-ai">
                        <div className="home-skills-skill">
                            <img src={chatGptLogo} alt="Chat GPT" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">ChatGPT</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={claudeLogo} alt="Claude" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Claude</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={bardLogo} alt="Bard" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Bard</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={midjourneyLogo} alt="Midjourney" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Midjourney</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={mistralLogo} alt="Mistral" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Mistral</p>
                        </div>
                    </div>
                    <h3 className="home-skills-titles">Development</h3>
                    <div className="home-skills-dev">
                        <div className="home-skills-skill">
                            <img src={htmlLogo} alt="Chat GPT" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">HTML</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={cssLogo} alt="Claude" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">CSS</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={sassLogo} alt="Bard" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Sass</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={reactLogo} alt="Midjourney" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">React.js</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={nodeLogo} alt="Mistral" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Node.js</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={jsLogo} alt="Mistral" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">JavaScript</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={tsLogo} alt="Mistral" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">TypeScript</p>
                        </div>
                        <div className="home-skills-skill">
                            <img src={pythonLogo} alt="Mistral" className="home-skills-skill-icon"/>
                            <p className="home-skills-skill-name">Python</p>
                        </div>
                    </div>
                </section>
{/* 
                <section className="home-section certifications">
                    <h2 className="home-section-heading">Certifications</h2>
                </section>

                <section className="home-section trainings">
                    <h2 className="home-section-heading">Trainings</h2>
                </section> */}
            </div>
        </div>
    );
}

export default Home;
