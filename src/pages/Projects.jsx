import { Link } from 'react-router-dom';
import '../assets/scss/pages/Projects.scss';
import '../assets/scss/index.scss'

function Projects() {
    return (
        <>
            <div id="projects">
                <p>Projects</p>
                <div>
                    <Link to="/projects/cozybot">Cozy-Bot</Link>
                </div>
            </div>
        </>
    );
}

export default Projects;
