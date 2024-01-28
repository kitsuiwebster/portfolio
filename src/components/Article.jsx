import '../assets/scss/components/Article.scss';
import '../assets/scss/index.scss';

function Article({ title, date, description }) {
    return (
        <div id="article">
            <div className="article">
                <h1 className='article-title'>{title}</h1>
                <p className='article-date'>{date}</p>
                <p className='article-description'>{description}</p>
            </div>
        </div>
    );
}

export default Article;
