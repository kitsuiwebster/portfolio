import '../../assets/scss/pages/projects/SophieBluel.scss';
import '../../assets/scss/index.scss';
import BackArrow from '../../components/BackArrow';
import openclassroomsLogo from '../../assets/images/openclassrooms.webp'
import { useTranslation } from 'react-i18next';

function SophieBluel() {
    const { t } = useTranslation('sophie');
    return(
        <>
            <BackArrow path="/projects"/>
            <div id="sophie-bluel">
                <div className='sophie-bluel'>
                    <div className='sophie-bluel-header'>
                        <img className='sophie-bluel-header-logo' src={openclassroomsLogo} alt="Openclassrooms"></img>
                        <h1 className='sophie-bluel-header-title'>Sophie Bluel</h1>
                    </div>
                    <ul className='sophie-bluel-content'>
                        <li className="sophie-bluel-content-li">{t('tasks.task-1')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-2')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-3')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-4')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-5')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-6')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-7')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-8')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-9')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-10')}</li>
                        <li className="sophie-bluel-content-li">{t('tasks.task-11')}</li>
                    </ul>
                    <a href="https://github.com/kitsuiwebster/architecte" target="_blank" rel="noopener noreferrer" className="sophie-bluel-github">{t('button')}</a>
                </div>
            </div>
        </>
    )
}

export default SophieBluel