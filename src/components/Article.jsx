import '../assets/scss/components/Article.scss';
import '../assets/scss/index.scss';

function Article({ title, description, firstIconSrc, firstIconAlt, secondIconSrc, secondIconAlt, thirdIconSrc, thirdIconAlt }) {
    return (
        <div id="article">
            <div className="article">
                <h1 className='article-title'>{title}</h1>
                <p className='article-description'>{description}</p>
                <div className='article-icons'>
                    <img src={firstIconSrc} alt={firstIconAlt} className="article-icons-img" />
                    <img src={secondIconSrc} alt={secondIconAlt} className="article-icons-img" />
                    <img src={thirdIconSrc} alt={thirdIconAlt} className="article-icons-img" />
                </div>
            </div>
        </div>
    );
}

export default Article;
