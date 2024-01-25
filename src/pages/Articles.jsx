import { Link } from 'react-router-dom';
import '../assets/scss/pages/Articles.scss';
import '../assets/scss/index.scss';
import Article from '../components/Article';


function Articles() {
    return (
        <>
            <div id="articles">
                <div className="articles">
                    <p className='articles-title'>Articles</p>
                    <Link to="/articles/hackaprompt2023" className="articles-link">
                        <Article title="Hack A Prompt" description="oui" /> 
                    </Link>
                    <Link to="/articles/minecraft-java-admin-commands" className="articles-link">
                        <Article title="Minecraft Server Java Administrator Commands" description="non" /> 
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Articles;
