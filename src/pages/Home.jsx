import React from 'react';
import '../assets/scss/pages/Home.scss';
import profilePicture from '../assets/images/profile-picture.jpg'; 
import '../assets/scss/index.scss'
import TechnoIcon from '../components/TechnoIcon';
import PaperProof from '../components/PaperProof';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next';

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
import figmaLogo from '../assets/images/technos/figma.png';
import vegasLogo from '../assets/images/technos/vegas-pro.webp';
import obsLogo from '../assets/images/technos/obs.png';
import gimpLogo from '../assets/images/technos/gimp.png';
import blenderLogo from '../assets/images/technos/blender-icon.png';
import vscodeLogo from '../assets/images/technos/vs-code.png';
import flstudioLogo from '../assets/images/technos/fl-studio.png';
import reaperLogo from '../assets/images/technos/reaper.png';
import kdenliveLogo from '../assets/images/technos/kden-live.png'
import windowsLogo from '../assets/images/technos/windows.png';
import workstationLogo from '../assets/images/technos/workstation.png';
import virtualboxLogo from '../assets/images/technos/virtualbox.png';
import cubaseLogo from '../assets/images/technos/cubase.png';
import autotuneLogo from '../assets/images/technos/auto-tune.png';

// Stars
import yellowStar from '../assets/images/stars/yellow.png';
import clearStar from '../assets/images/stars/clear.png';
import halfStar from '../assets/images/stars/half.png'

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

    const { theme } = useTheme();

    const { t } = useTranslation('home');

    return (
        <div id="home">
            <div className={`home ${theme}`}>
                <header className="home-header">
                    <div className="home-header-text">
                        <h1 className="home-header-title">Raphaël MARTIN</h1>
                        <h2 className="home-header-subtitle">{t('header.subtitle')}</h2>
                        <h3 className="home-header-location">📍 Toulouse, France</h3>
                        <p className="home-header-bio">{t('header.bio')}</p>
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
                    <h2 className="home-skills-title">{t('skills.title')}</h2>
                
                    <h3 className="home-skills-titles">AI - Prompt Engineering</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={chatGptLogo} alt="Chat GPT" name="ChatGPT ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar}/>
                        <TechnoIcon src={claudeLogo} alt="Claude" name="Claude"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={bardLogo} alt="Bard" name="Bard"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={midjourneyLogo} alt="Midjourney" name="Midjourney ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={mistralLogo} alt="Mistral" name="Mistral"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.dev')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={htmlLogo} alt="HTML" name="HTML"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={cssLogo} alt="CSS" name="CSS ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={sassLogo} alt="Sass" name="Sass ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={reactLogo} alt="React.js" name="React.js"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={nodeLogo} alt="Node.js" name="Node.js"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={jsLogo} alt="JavaScript" name="JavaScript"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={tsLogo} alt="TypeScript" name="TypeScript"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={pythonLogo} alt="Python" name="Python"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={gitLogo} alt="Git" name="Git"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={n8nLogo} alt="N8n" name="N8n"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={vscodeLogo} alt="VS Code" name="VS Code"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.sys')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={windowsLogo} alt="Windows" name="Windows"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={linuxLogo} alt="Linux" name="Linux ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={bashLogo} alt="Bash" name="Bash"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={zshLogo} alt="Zsh" name="Zsh"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={condaLogo} alt="Conda" name="Conda"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={raspberryLogo} alt="Raspberry Pi" name="Raspberry Pi"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={workstationLogo} alt="Workstation" name="Workstation"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={virtualboxLogo} alt="VirtualBox" name="VirtualBox"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                    </div>


                    <h3 className="home-skills-titles">{t('skills.visual')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={vegasLogo} alt="Vegas Pro" name="Vegas Pro"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={kdenliveLogo} alt="Kden Live" name="Kden Live"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={gimpLogo} alt="Gimp" name="Gimp"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={blenderLogo} alt="Blender" name="Blender"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={obsLogo} alt="OBS" name="OBS"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={figmaLogo} alt="Figma" name="Figma"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">Audio</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={flstudioLogo} alt="FL Studio" name="FL Studio ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={reaperLogo} alt="Reaper" name="Reaper ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={cubaseLogo} alt="Cubase" name="Cubase"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={autotuneLogo} alt="Auto-tune" name="Auto-tune"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                    </div>
                </section>

                <section className="home-certifications">
                    <h2 className="home-certifications-title">Certifications</h2>
                    <div className="home-certifications-certifs">
                        <PaperProof src={certifiedPromptEngineer} alt="Certified Prompt Engineer"/>
                        <PaperProof src={certifiedCsiLinuxInvestigator} alt="Certified CSI Linux Investigator"/>
                    </div>
                    <h3 className="home-certifications-subtitle">{t('certifications.certificate')}</h3>
                    <div className="home-certifications-certificates">
                        <PaperProof src={cocLinux} alt="Certificate of Completion General Linux Administration"/>
                        <PaperProof src={justJavaScript} alt="Certificate of Completion Just JavaScript"/>
                    </div>
                </section>

                <section className="home-trainings">
                    {/* <h2 className="home-trainings-title">Trainings</h2> */}
                </section>

                <section>
                    {/* <p>Guess what, I'm also musician !</p> */}
                </section>

            </div>
        </div>
    );
}

export default Home;
