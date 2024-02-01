import '../../assets/scss/pages/projects/Kasa.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.png'
import { useTranslation } from 'react-i18next';

function Kasa() {
    const { t } = useTranslation('kasa');
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
                        <li className="kasa-content-li">{t('tasks.task-1')}</li>
                        <li className="kasa-content-li">{t('tasks.task-2')}</li>
                        <li className="kasa-content-li">{t('tasks.task-3')}</li>
                        <li className="kasa-content-li">{t('tasks.task-4')}</li>
                        <li className="kasa-content-li">{t('tasks.task-5')}</li>
                        <li className="kasa-content-li">{t('tasks.task-6')}</li>
                        <li className="kasa-content-li">{t('tasks.task-7')}</li>
                        <li className="kasa-content-li">{t('tasks.task-8')}</li>
                        <li className="kasa-content-li">{t('tasks.task-9')}</li>
                        <li className="kasa-content-li">{t('tasks.task-10')}</li>
                        <li className="kasa-content-li">{t('tasks.task-11')}</li>
                    </ul>
                    <a href="https://github.com/kitsuiwebster/kasa" target="_blank" rel="noopener noreferrer" className="kasa-github">{t('button')}</a>
                </div>
            </div>
        </>
    )
}

export default Kasa