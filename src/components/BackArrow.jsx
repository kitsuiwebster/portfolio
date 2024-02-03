import '../assets/scss/components/BackArrow.scss';
import blackBackArrow from '../assets/images/back-arrow.png';
import whiteBackArrow from '../assets/images/white-back-arrow.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function BackArrow({ path }) {
    const { theme } = useTheme(); 
    const backArrow = theme === 'dark' ? whiteBackArrow : blackBackArrow; 

    return (
        <div className='back-arrow-container'>
            <Link to={path}>
                <img loading="lazy" className='back-arrow' alt="back arrow" src={backArrow}></img>
            </Link>
        </div>
    );
}

export default BackArrow