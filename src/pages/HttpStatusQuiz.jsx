import '../assets/scss/pages/HttpStatusQuiz.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HttpStatusQuiz() {
    const { t } = useTranslation('http')
    return(
        <div id="http">
            <div className='http'>
                <h1>HTTP Status Quiz Menu 😁</h1>
                <Link className="http-button" to="/quiz/http-status/10">10 Questions Quiz</Link>
                <Link className="http-button" to="/quiz/http-status/30">30 Questions Quiz</Link>
                <Link className="http-button" to="/quiz/http-status/all">All Status Quiz</Link>
            </div>
        </div>
    )
}

export default HttpStatusQuiz