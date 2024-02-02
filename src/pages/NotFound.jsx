import '../assets/scss/pages/NotFound.scss';
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation('notfound')
    return(
        <div id="error">
            <div className='error'>
                <div className='error-container'>
                    <p className="error-container-404">404</p>
                    <p className="error-container-message">{t('oops')}</p>
                    <a href="/">
                        <button className="error-container-gohome">{t('back')}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound