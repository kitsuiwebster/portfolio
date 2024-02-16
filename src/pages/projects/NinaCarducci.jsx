import '../../assets/scss/pages/projects/NinaCarducci.scss';
import '../../assets/scss/index.scss'
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.webp'
import { useTranslation } from 'react-i18next';

function NinaCarducci() {
    const { t } = useTranslation('nina');
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
                        <li className="nina-carducci-content-li">{t('tasks.task-1')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-2')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-3')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-4')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-5')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-6')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-7')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-8')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-9')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-10')}</li>
                        <li className="nina-carducci-content-li">{t('tasks.task-11')}</li>
                    </ul>

                    <a href="https://github.com/kitsuiwebster/nina-carducci" target="_blank" rel="noopener noreferrer" className="nina-carducci-github">{t('button')}</a>
                </div>
            </div>
        </>
    )
}

export default NinaCarducci