import '../../assets/scss/pages/projects/SophieBluel.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.png'

function SophieBluel() {
    return(
        <>
            <BackArrow path="/projects"/>
            <div id="sophie-bluel">
                <div className='sophie-bluel'>
                    <div className='sophie-bluel-header'>
                        <img className='sophie-bluel-header-logo' src={openclassroomsLogo} alt="Openclassrooms"></img>
                        <h1 className='sophie-bluel-header-title'>Sophie Bluel</h1>
                    </div>
                    <ul className='sophie-bluel-content'>
                        <li className="sophie-bluel-content-li">I enhanced a static HTML portfolio gallery page by adding dynamic functionality with JavaScript</li>
                        <li className="sophie-bluel-content-li">I implemented a filtering feature to dynamically display projects based on criteria</li>
                        <li className="sophie-bluel-content-li">I built a login page from scratch with JavaScript to handle site administrator authentication</li>
                        <li className="sophie-bluel-content-li">I created a modal pop-up with JavaScript to allow the admin to upload new gallery images</li>
                        <li className="sophie-bluel-content-li">I handled user events like clicks, inputs, form submits etc with JavaScript event listeners</li>
                        <li className="sophie-bluel-content-li">I manipulated the DOM by selecting HTML elements and updating values, styles, attributes etc</li>
                        <li className="sophie-bluel-content-li">I integrated with a backend API using JavaScript fetch to GET project data and POST new images</li>
                        <li className="sophie-bluel-content-li">I managed user authentication state to toggle views for logged in vs logged out</li>
                        <li className="sophie-bluel-content-li">I coded the front-end functionality according to provided designs/requirements</li>
                        <li className="sophie-bluel-content-li">I properly organized and documented by code following best practices</li>
                        <li className="sophie-bluel-content-li">I put together a presentation and discussed technical decisions and implementation</li>
                    </ul>
                    <a href="https://github.com/kitsuiwebster/architecte" target="_blank" rel="noopener noreferrer" className="sophie-bluel-github">Repository Github</a>
                </div>
            </div>
        </>
    )
}

export default SophieBluel