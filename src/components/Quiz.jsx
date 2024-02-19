import '../assets/scss/components/Quiz.scss';

function Quiz({ title, imgSrc, imgAlt, description }) {
    return(
        <div id="quiz">
            <div className='quiz'>
                <h1 className='quiz-title'>{title}</h1>
                <img className='quiz-img' src={imgSrc} alt={imgAlt}></img>
                <p className='quiz-description'>{description}</p>
            </div>
        </div>
    )
}

export default Quiz