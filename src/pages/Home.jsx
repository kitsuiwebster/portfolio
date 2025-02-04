import React from 'react';
import '../assets/scss/pages/Home.scss';
import '../assets/scss/index.scss';
import profilePicture from '../assets/images/profile-picture.webp'; 
import TechnoIcon from '../components/TechnoIcon';
import PaperProof from '../components/PaperProof';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next';

// Social links
import gitlabLogo from '../assets/images/social/gitlab.webp';
import githubLogo from '../assets/images/social/github.webp';
import linkedinLogo from '../assets/images/social/linkedin.webp';
import xLogo from '../assets/images/social/x.webp';
import mediumLogo from '../assets/images/social/medium.webp';
import devtoLogo from '../assets/images/social/devto.webp';
import discordLogo from '../assets/images/social/discord.webp';

// Languages
import frenchFlag from '../assets/images/flags/fr.webp';
import ukFlag from '../assets/images/flags/uk.webp';
import speakingLightIcon from '../assets/images/speak-light.webp';
import speakingDarkIcon from '../assets/images/speak-dark.webp';

// Technos links
import chatGptLogo from '../assets/images/technos/chat-gpt.webp'; 
import claudeLogo from '../assets/images/technos/claude.webp';
import bardLogo from '../assets/images/technos/bard.webp';
import midjourneyLogo from '../assets/images/technos/midjourney.webp';
import mistralLogo from '../assets/images/technos/mistral.webp';
import htmlLogo from '../assets/images/technos/html.webp';
import cssLogo from '../assets/images/technos/css.webp';
import sassLogo from '../assets/images/technos/sass.webp';
import reactLogo from '../assets/images/technos/react.webp';
import nodeLogo from '../assets/images/technos/node.webp';
import jsLogo from '../assets/images/technos/js.webp';
import tsLogo from '../assets/images/technos/ts.webp';
import pythonLogo from '../assets/images/technos/python.webp';
import gitLogo from '../assets/images/technos/git.webp';
import linuxLogo from '../assets/images/technos/linux.webp';
import bashLogo from '../assets/images/technos/bash.webp';
import zshLogo from '../assets/images/technos/zsh.webp';
import n8nLogo from '../assets/images/technos/n8n.webp';
import condaLogo from '../assets/images/technos/conda.webp';
import raspberryLogo from '../assets/images/technos/raspberry-pi.webp';
import figmaLogo from '../assets/images/technos/figma.webp';
import vegasLogo from '../assets/images/technos/vegas-pro.webp';
import obsLogo from '../assets/images/technos/obs.webp';
import gimpLogo from '../assets/images/technos/gimp.webp';
import blenderLogo from '../assets/images/technos/blender-icon.webp';
import vscodeLogo from '../assets/images/technos/vs-code.webp';
import flstudioLogo from '../assets/images/technos/fl-studio.webp';
import reaperLogo from '../assets/images/technos/reaper.webp';
import kdenliveLogo from '../assets/images/technos/kden-live.webp'
import windowsLogo from '../assets/images/technos/windows.webp';
import workstationLogo from '../assets/images/technos/workstation.webp';
import virtualboxLogo from '../assets/images/technos/virtualbox.webp';
import cubaseLogo from '../assets/images/technos/cubase.webp';
import autotuneLogo from '../assets/images/technos/auto-tune.webp';
import mongodbLogo from '../assets/images/technos/mongodb.webp';
import noderedLogo from '../assets/images/technos/nodered.webp';
import couchdbLogo from '../assets/images/technos/couchdb.webp';
import nestLogo from '../assets/images/technos/nest.webp';
import geminiLogo from '../assets/images/technos/gemini.webp';
import vuejsLogo from '../assets/images/technos/vuejs.png';
import nuxtLogo from '../assets/images/technos/nuxt.png';
import tailwindLogo from '../assets/images/technos/tailwind.png';
import kubernetesLogo from '../assets/images/technos/kubernetes.png';
import keycloakLogo from '../assets/images/technos/keycloak.png';
import graviteeLogo from '../assets/images/technos/gravitee.png';
import rustLogo from '../assets/images/technos/rust.png';
import angularLogo from '../assets/images/technos/angular.png';
import unityLogo from '../assets/images/technos/unity.png';
import flowiseLogo from '../assets/images/technos/flowise.svg';
import premiereproLogo from '../assets/images/technos/premiere-pro.png';
import csharpLogo from '../assets/images/technos/c-sharp.png';
import mysqlLogo from '../assets/images/technos/mysql.png';
import insomniaLogo from '../assets/images/technos/insomnia.png';

// Stars
import yellowStar from '../assets/images/stars/yellow.webp';
import clearStar from '../assets/images/stars/clear.webp';
import halfStar from '../assets/images/stars/half.webp';

// Certifications links
import certifiedPromptEngineer from '../assets/images/certifications/prompt-engineer.webp';
import certifiedReactDeveloper from '../assets/images/certifications/react-developer.webp';
import certifiedCsiLinuxInvestigator from '../assets/images/certifications/csi-linux-investigator.webp';
import cocLinux from '../assets/images/certifications/coc-linux.webp';
import justJavaScript from '../assets/images/certifications/just-javascript.webp';
import systemAndNetworksTech from '../assets/images/certifications/systems-and-networks-tech.png';
import webItegratorAndDeveloper from '../assets/images/certifications/web-integrator-and-developer.png';
import graviteeCertified from '../assets/images/certifications/gravitee-certified.png';


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
                        <h3 className="home-header-location">{t('header.location')}</h3>
                        <p className="home-header-bio">{t('header.bio')}</p>
                    </div>
                    <img  loading="lazy" src={profilePicture} alt="Raphaël Martin kitsuiwebster" className="home-header-profilepic"/>
                </header>

                <section className="home-social">
                    <nav className="home-social-links">
                        <a href="https://gitlab.com/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img  loading="lazy" className="home-social-link-img" src={gitlabLogo} alt="GitLab"/>
                        </a>
                        <a href="https://github.com/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img  loading="lazy" className="home-social-link-img" src={githubLogo} alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img  loading="lazy" className="home-social-link-img" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img  loading="lazy" className="home-social-link-img" src={xLogo} alt="Twitter X"/>
                        </a>
                        <a href="https://kitsuiwebster.medium.com" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img  loading="lazy" className="home-social-link-img" src={mediumLogo} alt="Medium"/>
                        </a>
                        <a href="https://dev.to/kitsuiwebster" className="home-social-link"  target="_blank" rel="noopener noreferrer">
                            <img  loading="lazy" className="home-social-link-img" src={devtoLogo} alt="Dev.to"/>
                        </a>
                        <div onClick={copyDiscordUsername} className="home-social-link">
                            <img  loading="lazy" className="home-social-link-img" src={discordLogo} alt="Discord"/>
                        </div>
                    </nav>
                </section>

                <section>
                    <div className='home-languages'>
                        <img  loading="lazy" className='home-languages-icon' src={theme === 'dark' ? speakingLightIcon : speakingDarkIcon} alt='Speaking out' />
                        <div className='home-languages-flags'>
                            <img  loading="lazy" className='home-languages-flags-img' src={frenchFlag} alt='French flag' />
                            <img  loading="lazy" className='home-languages-flags-img' src={ukFlag} alt='United Kingdom flag' />
                        </div>
                    </div>
                </section>

                <section className="home-skills">
                    <h2 className="home-skills-title">{t('skills.title')}</h2>
                
                    <h3 className="home-skills-titles">{t('skills.ai')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={mistralLogo} alt="Mistral" name="Mistral ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={chatGptLogo} alt="Chat GPT" name="ChatGPT ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar}/>
                        <TechnoIcon src={claudeLogo} alt="Claude" name="Claude"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={bardLogo} alt="Bard" name="Bard"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={geminiLogo} alt="Gemini" name="Gemini"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={midjourneyLogo} alt="Midjourney" name="Midjourney ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.lang')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={htmlLogo} alt="HTML" name="HTML"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={cssLogo} alt="CSS" name="CSS ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={sassLogo} alt="Sass" name="Sass ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                        <TechnoIcon src={jsLogo} alt="JavaScript" name="JavaScript"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={tsLogo} alt="TypeScript" name="TypeScript"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={rustLogo} alt="Rust" name="Rust"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={pythonLogo} alt="Python" name="Python"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={csharpLogo} alt="C#" name="C#"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.dev')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={reactLogo} alt="React.js" name="React.js"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={angularLogo} alt="Angular" name="Angular ❤️"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={vuejsLogo} alt="Vue.js" name="Vue.js"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={nuxtLogo} alt="Nuxt.js" name="Nuxt.js"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={tailwindLogo} alt="Tailwind CSS" name="Tailwind CSS"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={nodeLogo} alt="Node.js" name="Node.js"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={nestLogo} alt="NestJS" name="NestJS"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.tools')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={gitLogo} alt="Git" name="Git"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={vscodeLogo} alt="VS Code" name="VS Code"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={figmaLogo} alt="Figma" name="Figma"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={unityLogo} alt="Unity" name="Unity"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={insomniaLogo} alt="Insomnia" name="Insomnia"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.db')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={couchdbLogo} alt="CouchDB" name="CouchDB"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={mongodbLogo} alt="MongoDB" name="MongoDB"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={mysqlLogo} alt="MySQL" name="MySQL"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.archi')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={kubernetesLogo} alt="Kubernetes" name="Kubernetes"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={graviteeLogo} alt="Gravitee" name="Gravitee"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />                  
                        <TechnoIcon src={keycloakLogo} alt="Keycloak" name="Keycloak"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.auto')}</h3>
                    <div className="home-skills-category">
                        <TechnoIcon src={n8nLogo} alt="N8n" name="N8n"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={noderedLogo} alt="Node-RED" name="Node-RED"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={halfStar} star5={clearStar} />
                        <TechnoIcon src={flowiseLogo} alt="Flowise" name="Flowise"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
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
                        <TechnoIcon src={premiereproLogo} alt="Premiere Pro" name="Premiere Pro"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={clearStar} />
                        <TechnoIcon src={vegasLogo} alt="Vegas Pro" name="Vegas Pro"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={kdenliveLogo} alt="Kden Live" name="Kden Live"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={gimpLogo} alt="Gimp" name="Gimp"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={halfStar} />
                        <TechnoIcon src={blenderLogo} alt="Blender" name="Blender"
                        star1={yellowStar} star2={yellowStar} star3={halfStar} star4={clearStar} star5={clearStar} />
                        <TechnoIcon src={obsLogo} alt="OBS" name="OBS"
                        star1={yellowStar} star2={yellowStar} star3={yellowStar} star4={yellowStar} star5={yellowStar} />
                    </div>

                    <h3 className="home-skills-titles">{t('skills.audio')}</h3>
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
                    <h2 className="home-certifications-title">{t('certifications.title')}</h2>
                    <div className="home-certifications-professional-title">
                        <PaperProof date="2022-11-21" src={systemAndNetworksTech} alt="Systems and networks technician (cybersecurity option) kitsuiwebster Raphaël Martin"/>
                        <PaperProof date="2024-04-19" src={webItegratorAndDeveloper} alt="Web Integrator and Developer kitsuiwebster Raphaël Martin"/>
                    </div>
                    <h2 className="home-certifications-title">{t('certifications.certif')}</h2>
                    <div className="home-certifications-certifs">
                        <PaperProof date="2023-08-30" src={certifiedPromptEngineer} alt="Certified Prompt Engineer kitsuiwebster Raphaël Martin"/>
                        <PaperProof date="2024-06-11" src={certifiedReactDeveloper} alt="Certified React Developer kitsuiwebster Raphaël Martin"/>
                        <PaperProof date="2023-08-21" src={certifiedCsiLinuxInvestigator} alt="Certified CSI Linux Investigator kitsuiwebster Raphaël Martin"/>
                        <PaperProof date="2024-06-26" src={graviteeCertified} alt="Gravitee.io Certified kitsuiwebster Raphaël Martin"/>
                    </div>
                    <h2 className="home-certifications-subtitle">{t('certifications.certificate')}</h2>
                    <div className="home-certifications-certificates">
                        <PaperProof date="2023-07-02" src={cocLinux} alt="Certificate of Completion General Linux Administration kitsuiwebster Raphaël Martin"/>
                        <PaperProof date="2023-01-03" src={justJavaScript} alt="Certificate of Completion Just JavaScript kitsuiwebster Raphaël Martin"/>
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
