import '../../assets/scss/pages/projects/Kasa.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.png'

function Kasa() {
    return(
        <>
            <BackArrow path="/projects"/>
            <div id="kasa">
                <div className='kasa'>
                    <div className='kasa-header'>
                        <img className='kasa-header-logo' src={openclassroomsLogo} alt="Openclassrooms"></img>
                        <h1 className='kasa-header-title'>Kasa</h1>
                    </div>
                    <ul className='kasa-content'>
                        <li className="kasa-content-li">I used React to build out the entire front-end interface of the home rental website, following provided Figma mockups and components.</li>
                        <li className="kasa-content-li">I used state and props to manage data flow and communication between components.</li>
                        <li className="kasa-content-li">I created React components for parts of the UI like the property listings, image galleries, accordions, headers, footers, etc.</li>
                        <li className="kasa-content-li">I created a router with React Router to handle navigation between different pages of the site.</li>
                        <li className="kasa-content-li">I implemented functionality like image sliders, opening/closing accordions, linking between pages, etc.</li>
                        <li className="kasa-content-li">I styled the components using Sass and CSS.</li>
                        <li className="kasa-content-li">I added CSS animations for elements like accordion expand/collapse.</li>
                        <li className="kasa-content-li">I initialized the project using Create React App and set up the overall filesystem structure.</li>
                        <li className="kasa-content-li">I structured, documented and organized all code to follow industry best practices.</li>
                        <li className="kasa-content-li">I delivered the full application code in a GitHub repository for review.</li>
                        <li className="kasa-content-li">I prepared and gave a presentation defending my technical decisions.</li>
                    </ul>
                    <a href="https://github.com/kitsuiwebster/kasa" target="_blank" rel="noopener noreferrer" className="kasa-github">Repository Github</a>
                </div>
            </div>
        </>
    )
}

export default Kasa