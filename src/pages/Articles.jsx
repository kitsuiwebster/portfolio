// Articles.jsx
import { Link } from 'react-router-dom';
import '../assets/scss/pages/Articles.scss';

function Articles() {
    return (
        <>
            <p>Articles</p>
            <div>
                <Link to="/articles/hackaprompt2023">Hack A Prompt</Link>
                <br/>
                <Link to="/articles/cozybot">Cozy-Bot</Link>
            </div>
        </>
    );
}

export default Articles;
