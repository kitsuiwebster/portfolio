import '../assets/scss/components/Project.scss';
import '../assets/scss/index.scss'

function Project({ title, description, firstIconSrc, firstIconAlt, secondIconSrc, secondIconAlt, thirdIconSrc, thirdIconAlt }) {
    return(
        <div id="project">
            <div className="project">
                <h1 className='project-title'>{title}</h1>
                <p className='project-description'>{description}</p>
                <div className='project-icons'>
                    <img src={firstIconSrc} alt={firstIconAlt} className="project-icons-img" />
                    <img src={secondIconSrc} alt={secondIconAlt} className="project-icons-img" />
                    <img src={thirdIconSrc} alt={thirdIconAlt} className="project-icons-img" />
                </div>
            </div>
        </div>
    )
}

export default Project