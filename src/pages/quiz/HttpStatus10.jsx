import React, { useState, useEffect } from 'react';
import '../../assets/scss/pages/quiz/HttpStatus.scss';
import { initialQuestions } from '../../js/questions';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HttpStatus10() {
    const { t } = useTranslation('httpquiz')
    const pickRandomQuestions = (questionsArray, numQuestions) => {
        const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, numQuestions);
    };

    const [questions, setQuestions] = useState(pickRandomQuestions(initialQuestions, 10));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [quizEnded, setQuizEnded] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        setQuestions(pickRandomQuestions(initialQuestions, 10));
    }, []);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isCorrect = userInput.trim() === questions[currentQuestionIndex].answer;
        if (isCorrect) {
            setUserScore(userScore + 1);
        }

        setUserAnswers([
            ...userAnswers,
            { question: questions[currentQuestionIndex], userAnswer: userInput.trim(), isCorrect }
        ]);

        setUserInput('');

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizEnded(true);
        }
    };

    const restartQuiz = () => {
        setQuestions(pickRandomQuestions(initialQuestions, 10));
        setCurrentQuestionIndex(0);
        setUserScore(0);
        setUserAnswers([]);
        setQuizEnded(false);
    };

    return (
        <div className="http-errors">
            {!quizEnded ? (
                <div className='http-errors-container'>
                    <img className="http-errors-img" src={questions[currentQuestionIndex].imageUrl} alt="HTTP Error" />
                    <p className='http-errors-current'>{currentQuestionIndex + 1} / {questions.length}</p>
                    <form onSubmit={handleSubmit} className="http-errors-form">
                        <input
                            className="http-errors-form-input"
                            type="text"
                            placeholder={t('placeholder')}
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <button className="http-errors-form-button" type="submit">{t('submit')}</button>
                        <Link className="http-errors-form-menu" to="/quiz/http-status">{t('back')}</Link>
                    </form>
                </div>
            ) : (
                <div className="results">
                    <ul className="results-list">
                        {userAnswers.map((answer, index) => (
                            <li key={index} className="results-list-item">
                                <img className="results-list-item-img" src={answer.question.imageUrl} alt="Answer" />
                                <div className="results-list-item-text">
                                    <p className='results-list-item-text-title'>{answer.question.errorCode}</p>
                                    <p className='results-list-item-text-your-answer'>
                                        {answer.isCorrect ? '✅ ' : '❌ '}
                                        {t('useranswer')}{answer.userAnswer}</p>
                                    <p className='results-list-item-text-correct-answer'>{t('correctanswer')}{answer.question.answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2 className="results-title">{t('finalscore')}{userScore} / {questions.length} !</h2>
                    <button className="results-button-restart" onClick={restartQuiz}>{t('playagain')}</button>
                    <Link className="results-button-menu" to="/quiz/http-status">{t('back2')}</Link>
                </div>
            )}
        </div>
    );
}

export default HttpStatus10;
