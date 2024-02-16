import { Link } from 'react-router-dom';
import '../assets/scss/pages/Projects.scss';
import '../assets/scss/index.scss'
import Project from '../components/Project';
import openclassroomsLogo from '../assets/images/openclassrooms.webp'
import cozybotLogo from '../assets/images/cozybot-logo.webp'
import { useTranslation } from 'react-i18next';

// Technos icons
import pythonLogo from '../assets/images/technos/python.webp';
import gitLogo from '../assets/images/technos/git.webp';
import zshLogo from '../assets/images/technos/zsh.webp';
import discordLogo from '../assets/images/social/discord.webp';
import raspberryLogo from '../assets/images/technos/raspberry-pi.webp';
import condaLogo from '../assets/images/technos/conda.webp';
import reactLogo from '../assets/images/technos/react.webp';
import htmlLogo from '../assets/images/technos/html.webp';
import sassLogo from '../assets/images/technos/sass.webp';
import jsLogo from '../assets/images/technos/js.webp';
import figmaLogo from '../assets/images/technos/figma.webp';
import cssLogo from '../assets/images/technos/css.webp';
import waveLogo from '../assets/images/technos/wave.webp';
import lighthouseLogo from '../assets/images/technos/lighthouse.webp';
import trelloLogo from '../assets/images/technos/trello.webp';
import flipboardLogo from '../assets/images/technos/flipboard.webp';
import swaggerLogo from '../assets/images/technos/swagger.webp';

// Projects images
import kasaImage from '../assets/images/projects/kasa.webp';
import ninacarducciImage from '../assets/images/projects/nina-carducci.webp';
import qwentaImage from '../assets/images/projects/qwenta.webp';
import sophiebluelImage from '../assets/images/projects/sophie-bluel.webp';
import cozybotImage from '../assets/images/projects/cozybot.webp';


function Projects() {
    const { t } = useTranslation('projects');
    return (
        <>
            <div id="projects">
                <div className="projects">
                    <h1 className='projects-title'>{t('titles.title')}</h1>
                    <Link to="/projects/cozybot" className="projects-link">
                        <Project
                        schoolLogo={cozybotLogo}
                        title="CozyBot"
                        subtitle={t('cozybot.subtitle')}
                        description={t('cozybot.description')}
                        imageSrc={cozybotImage}
                        imageAlt="CozyBot"
                        logoSrc0={pythonLogo}
                        logoSrc1={discordLogo}
                        logoSrc2={condaLogo}
                        logoSrc3={raspberryLogo}
                        logoSrc4={zshLogo}
                        logoSrc5={gitLogo}
                        />
                    </Link>
                    <h2 className='projects-subtitle'>{t('titles.school')}</h2>
                    <Link to="/projects/kasa" className="projects-link">
                        <Project
                        schoolLogo={openclassroomsLogo}
                        title="Kasa"
                        subtitle={t('kasa.subtitle')}
                        description={t('kasa.description')} 
                        imageSrc={kasaImage}
                        imageAlt="Kasa"
                        logoSrc0={reactLogo}
                        logoSrc1={htmlLogo}
                        logoSrc2={sassLogo}
                        logoSrc3={jsLogo}
                        logoSrc4={figmaLogo}
                        logoSrc5={gitLogo}
                        />
                    </Link>
                    <Link to="/projects/nina-carducci" className="projects-link">
                        <Project
                        schoolLogo={openclassroomsLogo}
                        title="Nina Carducci"
                        subtitle={t('nina.subtitle')}
                        description={t('nina.description')} 
                        imageSrc={ninacarducciImage}
                        imageAlt="Nina Carducci"
                        logoSrc0={htmlLogo}
                        logoSrc1={cssLogo}
                        logoSrc2={jsLogo}
                        logoSrc3={lighthouseLogo}
                        logoSrc4={waveLogo}
                        logoSrc5={gitLogo}
                        />
                    </Link>
                    <Link to="/projects/qwenta" className="projects-link">
                        <Project
                        schoolLogo={openclassroomsLogo}
                        title="Qwenta"
                        subtitle={t('qwenta.subtitle')}
                        description={t('qwenta.description')} 
                        imageSrc={qwentaImage}
                        imageAlt="Qwenta"
                        logoSrc0={trelloLogo}
                        logoSrc1={flipboardLogo}
                        />
                    </Link>
                    <Link to="/projects/sophie-bluel" className="projects-link">
                        <Project
                        schoolLogo={openclassroomsLogo}
                        title="Sophie Bluel"
                        subtitle={t('sophie.subtitle')}
                        description={t('sophie.description')} 
                        imageSrc={sophiebluelImage}
                        imageAlt="Sophie Bluel"
                        logoSrc0={jsLogo}
                        logoSrc1={figmaLogo}
                        logoSrc2={swaggerLogo}
                        logoSrc3={gitLogo}
                        />
                    </Link>
                    {/* <h2 className='projects-subtitle'>{t('titles.other')}</h2> */}
                </div>
            </div>
        </>
    );
}

export default Projects;