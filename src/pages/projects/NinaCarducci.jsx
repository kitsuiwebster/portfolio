import '../../assets/scss/pages/projects/NinaCarducci.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.png'

function NinaCarducci() {
    return(
        <>
            <BackArrow path="/projects"/>
            <div id="nina-carducci">
                <div className='nina-carducci'>
                    <div className='nina-carducci-header'>
                        <img className='nina-carducci-header-logo' src={openclassroomsLogo} alt="Openclassrooms"></img>
                        <h1 className='nina-carducci-header-title'>Nina Carducci</h1>
                    </div>
                    <ul className='nina-carducci-content'>
                        <li className="nina-carducci-content-li">I analyzed the website's existing code to identify optimization opportunities</li>
                        <li className="nina-carducci-content-li">I minified code and assets to improve performance</li>
                        <li className="nina-carducci-content-li">I compressed and resized images to reduce page load time</li>
                        <li className="nina-carducci-content-li">I improved SEO by adding metadata, alt text, headings and Schema markup</li>
                        <li className="nina-carducci-content-li">I fixed bugs in the image gallery modal and filters functionality</li>
                        <li className="nina-carducci-content-li">I improved accessibility using ARIA roles, labels and proper semantic HTML</li>
                        <li className="nina-carducci-content-li">I optimized for mobile screens and touch targets</li>
                        <li className="nina-carducci-content-li">I used Lighthouse and Wave tools to measure improvements</li>
                        <li className="nina-carducci-content-li">I thoroughly documented all changes made in a detailed report</li>
                        <li className="nina-carducci-content-li">I prepared a presentation to demonstrate optimizations to the client</li>
                        <li className="nina-carducci-content-li">I defended my technical choices in an oral discussion</li>
                    </ul>

                    <a href="https://github.com/kitsuiwebster/nina-carducci" target="_blank" rel="noopener noreferrer" className="nina-carducci-github">Repository Github</a>
                </div>
            </div>
        </>
    )
}

export default NinaCarducci