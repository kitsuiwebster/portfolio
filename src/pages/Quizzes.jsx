import '../assets/scss/pages/Quizzes.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Quiz from '../components/Quiz';
import httpImg from '../assets/images/quizzes/http.webp';
import portsImg from '../assets/images/quizzes/ports.webp';

function Quizzes() {
    const { t } = useTranslation('quizzes')
    return(
        <div id="quizzes">
            <div className='quizzes'>
                <h1 className='quizzes-title'>{t('title')}</h1>
                <Link to="/quiz/http-status" className="quizzes-link">
                    <Quiz
                    title={t('http.title')}
                    imgSrc={httpImg}
                    imgAlt={t('http.alt')}
                    description={t('http.description')}
                    ></Quiz>
                </Link>
                <Link to="/quiz/tcp-udp-ports" className="quizzes-link">
                    <Quiz
                    title={t('ports.title')}
                    imgSrc={portsImg}
                    imgAlt={t('ports.alt')}
                    description={t('ports.description')}
                    ></Quiz>
                </Link>
            </div>
        </div>
    )
}

export default Quizzes