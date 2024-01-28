import '../../assets/scss/pages/projects/Qwenta.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.png'

function Qwenta() {
    return(
        <>
            <BackArrow path="/projects"/>
            <div id="qwenta">
                <div className='qwenta'>
                    <div className='qwenta-header'>
                        <img className='qwenta-header-logo' src={openclassroomsLogo} alt="Openclassrooms"></img>
                        <h1 className='qwenta-header-title'>Qwenta</h1>
                    </div>
                    <ul className='qwenta-content'>
                        <li className="qwenta-content-li">I Set up a technology monitoring/watch system to research and find ideas related to the project</li>
                        <li className="qwenta-content-li">I defined the technical specifications for the "Menu Maker" site based on provided functional specs</li>
                        <li className="qwenta-content-li">I broke down the features and requirements into developer tasks and user stories</li>
                        <li className="qwenta-content-li">I established a Kanban board with columns for tracking task status</li>
                        <li className="qwenta-content-li">I evaluated and selected the appropriate project management tool to use</li>
                        <li className="qwenta-content-li">I created multiple presentations to document research, plans, solutions</li>
                        <li className="qwenta-content-li">I prepared to present and defend my technical choices to the client</li>
                        <li className="qwenta-content-li">I planned meetings, communications and validation processes for an agile workflow</li>
                        <li className="qwenta-content-li">I determined the need for collaboration with a backend developer and proposed an integration strategy</li>
                        <li className="qwenta-content-li">I used diagrams and visuals to explain technical details to non-technical stakeholders</li>
                        <li className="qwenta-content-li">I followed best practices in organizing, documenting and exporting deliverables</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Qwenta