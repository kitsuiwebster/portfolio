import React from 'react';
import '../assets/scss/pages/Home.scss';
import profilePicture from '../assets/images/profile-picture.jpg'; 
import '../assets/scss/index.scss'
import TechnoIcon from '../components/TechnoIcon';
import PaperProof from '../components/PaperProof';

// Social links
import gitlabLogo from '../assets/images/social/gitlab.png';
import githubLogo from '../assets/images/social/github.png';
import linkedinLogo from '../assets/images/social/linkedin.png';
import xLogo from '../assets/images/social/x.webp';
import mediumLogo from '../assets/images/social/medium.png';
import devtoLogo from '../assets/images/social/devto.png';
import discordLogo from '../assets/images/social/discord.jpg';

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
import gitLogo from '../assets/images/technos/git.png';
import linuxLogo from '../assets/images/technos/linux.png';
import bashLogo from '../assets/images/technos/bash.png';
import zshLogo from '../assets/images/technos/zsh.png';
import n8nLogo from '../assets/images/technos/n8n.png';
import condaLogo from '../assets/images/technos/conda.png';
import raspberryLogo from '../assets/images/technos/raspberry-pi.png';

// Certifications links
import certifiedPromptEngineer from '../assets/images/certifications/prompt-engineer.jpg'
import certifiedCsiLinuxInvestigator from '../assets/images/certifications/csi-linux-investigator.jpg'
import cocLinux from '../assets/images/certifications/coc-linux.png'
import justJavaScript from '../assets/images/certifications/just-javascript.jpg'


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


function Home() {
    return (
        <div id="home">
            <div className="home">
                <header className="home-header">
                    <div className="home-header-text">
                        <h1 className="home-header-title">Raphaël MARTIN</h1>
                        <h2 className="home-header-subtitle">IT Freelance, Prompt Engineer, Developer</h2>
                        <h3 className="home-header-location">📍 Toulouse, France</h3>
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
        
            <h3 className="home-skills-titles">AI - Prompt Engineering</h3>
            <div className="home-skills-ai">
                <TechnoIcon src={chatGptLogo} alt="Chat GPT" name="ChatGPT" />
                <TechnoIcon src={claudeLogo} alt="Claude" name="Claude" />
                <TechnoIcon src={bardLogo} alt="Bard" name="Bard" />
                <TechnoIcon src={midjourneyLogo} alt="Midjourney" name="Midjourney" />
                <TechnoIcon src={mistralLogo} alt="Mistral" name="Mistral" />
            </div>

            <h3 className="home-skills-titles">Development</h3>
            <div className="home-skills-dev">
                <TechnoIcon src={htmlLogo} alt="HTML" name="HTML" />
                <TechnoIcon src={cssLogo} alt="CSS" name="CSS" />
                <TechnoIcon src={sassLogo} alt="Sass" name="Sass" />
                <TechnoIcon src={reactLogo} alt="React.js" name="React.js" />
                <TechnoIcon src={nodeLogo} alt="Node.js" name="Node.js" />
                <TechnoIcon src={jsLogo} alt="JavaScript" name="JavaScript" />
                <TechnoIcon src={tsLogo} alt="TypeScript" name="TypeScript" />
                <TechnoIcon src={pythonLogo} alt="Python" name="Python" />
                <TechnoIcon src={gitLogo} alt="Git" name="Git" />
                <TechnoIcon src={n8nLogo} alt="N8n" name="N8n" />
            </div>

            <h3 className="home-skills-titles">System</h3>
            <div className="home-skills-dev">
                <TechnoIcon src={linuxLogo} alt="Linux" name="Linux" />
                <TechnoIcon src={bashLogo} alt="Bash" name="Bash" />
                <TechnoIcon src={zshLogo} alt="Zsh" name="Zsh" />
                <TechnoIcon src={condaLogo} alt="Conda" name="Conda" />
                <TechnoIcon src={raspberryLogo} alt="Raspberry Pi" name="Raspberry Pi" />
            </div>
                </section>

                <section className="home-certifications">
                    <h2 className="home-certifications-title">Certifications</h2>
                    <div className="home-certifications-certifs">
                        <PaperProof src={certifiedPromptEngineer} alt="Certified Prompt Engineer"/>
                        <PaperProof src={certifiedCsiLinuxInvestigator} alt="Certified CSI Linux Investigator"/>
                    </div>
                    <h3 className="home-certifications-subtitle">Certificates of Completion</h3>
                    <div className="home-certifications-certificates">
                        <PaperProof src={cocLinux} alt="Certificate of Completion General Linux Administration"/>
                        <PaperProof src={justJavaScript} alt="Certificate of Completion Just JavaScript"/>
                    </div>
                </section>

                <section className="home-trainings">
                    <h2 className="home-trainings-title">Trainings</h2>
                </section>

                <section>
                    <p>Guess what, I'm also musician !</p>
                </section>

            </div>
        </div>
    );
}

export default Home;
