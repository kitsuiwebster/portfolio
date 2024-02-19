import '../../assets/scss/pages/quiz/HttpStatusQuiz.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackArrow from '../../components/BackArrow';

function HttpStatusQuiz() {
    const { t } = useTranslation('http')
    return(
        <>
            <BackArrow path="/quiz"/>
            <div id="http">
                <div className='http'>
                    <h1 className='http-title'>{t('title')}</h1>
                    <Link className="http-button" to="/quiz/http-status/10">{t('10')}</Link>
                    <Link className="http-button" to="/quiz/http-status/30">{t('30')}</Link>
                    <Link className="http-button" to="/quiz/http-status/all">{t('all')}</Link>
                </div>
            </div>
        </>
    )
}

export default HttpStatusQuiz