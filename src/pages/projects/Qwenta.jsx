import '../../assets/scss/pages/projects/Qwenta.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.webp'
import { useTranslation } from 'react-i18next';

function Qwenta() {
    const { t } = useTranslation('qwenta');
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
                        <li className="qwenta-content-li">{t('tasks.task-1')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-2')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-3')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-4')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-5')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-6')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-7')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-8')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-9')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-10')}</li>
                        <li className="qwenta-content-li">{t('tasks.task-11')}</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Qwenta