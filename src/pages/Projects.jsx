import { Link } from 'react-router-dom';
import '../assets/scss/pages/Projects.scss';
import '../assets/scss/index.scss'
import Project from '../components/Project';

// Technos icons
import pythonLogo from '../assets/images/technos/python.png';
import gitLogo from '../assets/images/technos/git.png';
import zshLogo from '../assets/images/technos/zsh.png';
import discordLogo from '../assets/images/social/discord.png';
import raspberryLogo from '../assets/images/technos/raspberry-pi.png';
import condaLogo from '../assets/images/technos/conda.png';
import reactLogo from '../assets/images/technos/react.png';
import htmlLogo from '../assets/images/technos/html.png';
import sassLogo from '../assets/images/technos/sass.png';
import jsLogo from '../assets/images/technos/js.png';

// Projects images
import kasaImage from '../assets/images/projects/kasa.png'
import cozybotImage from '../assets/images/projects/cozybot.png'


function Projects() {
    return (
        <>
            <div id="projects">
                <div className="projects">
                    <h1 className='projects-title'>Projects</h1>
                    <h2 className='projects-subtitle'>School Projects</h2>
                    <Link to="/projects/cozybot" className="projects-link">
                        <Project
                        title="Kasa: A real estate rental agency"
                        description="Bring tranquility to your Discord server with CozyBot. This innovative bot streams peaceful nature ambiences into voice channels on-demand." 
                        imageSrc={kasaImage}
                        imageAlt="Kasa"
                        logoSrc0={reactLogo}
                        logoSrc1={htmlLogo}
                        logoSrc2={sassLogo}
                        logoSrc3={jsLogo}
                        alt="Python"
                        />
                    </Link>
                    <h2 className='projects-subtitle'>Other Projects</h2>
                    <Link to="/projects/cozybot" className="projects-link">
                        <Project
                        title="CozyBot: A Discord bot that brings peace in voice channels"
                        description="Bring tranquility to your Discord server with CozyBot. This innovative bot streams peaceful nature ambiences into voice channels on-demand." 
                        imageSrc={cozybotImage}
                        imageAlt="CozyBot"
                        logoSrc0={pythonLogo}
                        logoSrc1={discordLogo}
                        logoSrc2={condaLogo}
                        logoSrc3={raspberryLogo}
                        logoSrc4={zshLogo}
                        logoSrc5={gitLogo}
                        alt="Python"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Projects;