import '../assets/scss/pages/Gallery.scss';
import '../assets/scss/index.scss';
import astronaut from '../assets/images/astronaut.png';

// kitsuiwebster
import alakazam from '../assets/images/gallery/alakazam.JPG';
import back from '../assets/images/gallery/back.JPG';
import castres from '../assets/images/gallery/castres.jpg';
import defaultPic from '../assets/images/gallery/default.jpg';
import lightning from '../assets/images/gallery/lightning.JPG';
import sleeping from '../assets/images/gallery/sleeping.jpg';
import smoking from '../assets/images/gallery/smoking.JPG';
import speaker from '../assets/images/gallery/speaker.jpg';
import studio from '../assets/images/gallery/studio.JPG';
import toulouse from '../assets/images/gallery/toulouse.jpg';

// vcg
import biggy from '../assets/images/gallery/biggy.jpg';
import trio from '../assets/images/gallery/trio.JPG';
import urus from '../assets/images/gallery/urus.jpg';
import koni from '../assets/images/gallery/koni.JPG';

function Gallery() {
    const kitsuiwebsterAlt = "kitsuiwebster - Raphaël Martin - Prompt Engineer - Developer";
    const vcgAlt = "Kitsui Koni Biggy - Valleiry City Gate VCG Recordz"
    return(
        <>
            <div id="gallery">
                <div className='gallery'>
                    <img className='gallery-welcome' src={astronaut} alt="Imène Medjaoui Astronaut BubbleXGum"></img>
                    <img className='gallery-img' src={alakazam} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={castres} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={back} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={defaultPic} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={lightning} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={sleeping} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={smoking} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={speaker} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={studio} alt={kitsuiwebsterAlt}></img>
                    <img className='gallery-img' src={toulouse} alt={kitsuiwebsterAlt}></img>

                    <img className='gallery-img' src={trio} alt={vcgAlt}></img>
                    <img className='gallery-img' src={urus} alt={vcgAlt}></img>
                    <img className='gallery-img' src={koni} alt={vcgAlt}></img>
                    <img className='gallery-img' src={biggy} alt={vcgAlt}></img>
                </div>
            </div>
        </>
    )
}

export default Gallery