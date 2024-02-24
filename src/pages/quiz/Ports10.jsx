import React, { useState, useEffect } from 'react';
import '../../assets/scss/pages/quiz/Ports.scss';
import { initialQuestions } from '../../js/portsQuestions';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Ports10() {
    const { t } = useTranslation('portsquiz')
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

        const isCorrect = userInput.trim() === questions[currentQuestionIndex].answer ||
                      (questions[currentQuestionIndex].port === '67/68 DHCP' && 
                       (userInput.trim() === '67' || userInput.trim() === '68')) ||
                       (questions[currentQuestionIndex].port === '20/21 FTP' && 
                       (userInput.trim() === '20' || userInput.trim() === '21'))
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
        <div className="port-numbers">
            {!quizEnded ? (
                <div className='port-numbers-container'>
                    <h1 className='port-numbers-title'>{questions[currentQuestionIndex].name}</h1>
                    <img className="port-numbers-img" src={questions[currentQuestionIndex].imageUrl} alt="HTTP Error" />
                    <p className='port-numbers-current'>{currentQuestionIndex + 1} / {questions.length}</p>
                    <form onSubmit={handleSubmit} className="port-numbers-form">
                        <input
                            className="port-numbers-form-input"
                            type="text"
                            placeholder={t('placeholder')}
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <button className="port-numbers-form-button" type="submit">{t('submit')}</button>
                        <Link className="port-numbers-form-menu" to="/quiz/tcp-udp-ports">{t('back')}</Link>
                    </form>
                </div>
            ) : (
                <div className="ports-results">
                    <ul className="ports-results-list">
                        {userAnswers.map((answer, index) => (
                            <li key={index} className="ports-results-list-item">
                                <img className="ports-results-list-item-img" src={answer.question.imageUrl} alt="Answer" />
                                <div className="ports-results-list-item-text">
                                    <p className='ports-results-list-item-text-title'>{answer.question.port}</p>
                                    <p className='ports-results-list-item-text-your-answer'>
                                        {answer.isCorrect ? '✅ ' : '❌ '}
                                        {t('useranswer')}{answer.userAnswer}</p>
                                    <p className='ports-results-list-item-text-correct-answer'>{t('correctanswer')}{answer.question.answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2 className="ports-results-title">{t('finalscore')}{userScore} / {questions.length} !</h2>
                    <button className="ports-results-button-restart" onClick={restartQuiz}>{t('playagain')}</button>
                    <Link className="ports-results-button-menu" to="/quiz/tcp-udp-ports">{t('back2')}</Link>
                </div>
            )}
        </div>
    );
}

export default Ports10;
