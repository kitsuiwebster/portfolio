import '../../assets/scss/pages/quiz/PortsQuiz.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackArrow from '../../components/BackArrow';

function PortsQuiz() {
    const { t } = useTranslation('ports')
    return(
        <>
            <BackArrow path="/quiz"/>
            <div id="ports">
                <div className='ports'>
                    <h1 className='ports-title'>{t('title')}</h1>
                    <Link className="ports-button" to="/quiz/tcp-udp-ports/10">{t('10')}</Link>
                    <Link className="ports-button" to="/quiz/tcp-udp-ports/30">{t('30')}</Link>
                    <Link className="ports-button" to="/quiz/tcp-udp-ports/50">{t('50')}</Link>
                </div>
            </div>
        </>
    )
}

export default PortsQuiz