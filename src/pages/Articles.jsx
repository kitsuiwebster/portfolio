import { Link } from 'react-router-dom';
import '../assets/scss/pages/Articles.scss';
import '../assets/scss/index.scss'

function Articles() {
    return (
        <>
            <div id="articles">
                <p>Articles</p>
                <div>
                    <Link to="/articles/hackaprompt2023">Hack A Prompt</Link>
                    <Link to="/articles/minecraft-java-admin-commands">Minecraft Server Java Administrator Commands</Link>
                </div>
            </div>
        </>
    );
}

export default Articles;
