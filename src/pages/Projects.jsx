import { Link } from 'react-router-dom';
import '../assets/scss/pages/Projects.scss';
import '../assets/scss/index.scss'
import Project from '../components/Project';

function Projects() {
    return (
        <>
            <div id="projects">
                <div className="projects">
                    <p className='projects-title'>Projects</p>
                    <Link to="/projects/cozybot" className="projects-link">
                        <Project
                        title="CozyBot: A Discord.py bot"
                        description="Bring tranquility to your Discord server with CozyBot. This innovative bot streams peaceful nature ambiences into voice channels on-demand."/> 
                        
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Projects;