import '../assets/scss/components/BackArrow.scss';
import backArrow from '../assets/images/back-arrow.png';
import { Link } from 'react-router-dom';

function BackArrow({path}) {
    return(
        <div className='back-arrow-container'>
            <Link to={path}>
                <img className='back-arrow' alt="back arrow" src={backArrow}></img>
            </Link>
        </div>
    )
}

export default BackArrow