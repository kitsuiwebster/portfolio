import { Link } from 'react-router-dom';
import '../assets/scss/pages/Articles.scss';
import '../assets/scss/index.scss';
import Article from '../components/Article';
import { useTranslation } from 'react-i18next';


function Articles() {
    const { t } = useTranslation('articles');
    return (
        <>
            <div id="articles">
                <div className="articles">
                    <p className='articles-title'>Articles</p>
                    <Link to="/articles/hackaprompt2023" className="articles-link">
                        <Article
                        title={t('hackaprompt.title')}
                        date={t('hackaprompt.date')}
                        description={t('hackaprompt.description')}/> 
                    </Link>
                    <Link to="/articles/minecraft-java-admin-commands" className="articles-link">
                        <Article
                        title={t('minecraft-java-admin-commands.title')}
                        date={t('minecraft-java-admin-commands.date')}
                        description={t('minecraft-java-admin-commands.description')} /> 
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Articles;
