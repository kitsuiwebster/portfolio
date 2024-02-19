import React, { useState, useEffect } from 'react';
import '../../assets/scss/pages/quiz/HttpStatus.scss';
import { initialQuestions } from '../../js/httpQuestions';
import { Link } from 'react-router-dom';

function HttpStatus62() {
    const [questions, setQuestions] = useState([...initialQuestions]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [quizEnded, setQuizEnded] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        setQuestions(questions => [...questions].sort(() => Math.random() - 0.5));
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
        setQuestions([...initialQuestions].sort(() => Math.random() - 0.5));
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
                    <p className='http-errors-current'>{currentQuestionIndex} / {questions.length}</p>
                    <form onSubmit={handleSubmit} className="http-errors-form">
                        <input
                            className="http-errors-form-input"
                            type="text"
                            placeholder="Enter the HTTP status code"
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <button className="http-errors-form-button" type="submit">Submit</button>
                        <Link className="http-errors-form-menu" to="/quiz/http-status">Go back to Quiz Menu</Link>
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
                                        Your answer: {answer.userAnswer}</p>
                                    <p className='results-list-item-text-correct-answer'>Correct answer: {answer.question.answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2 className="results-title">Your final score is {userScore} / {questions.length} !</h2>
                    <button className="results-restart-button" onClick={restartQuiz}>Play Again</button>
                    <Link className="results-button-menu" to="/quiz/http-status">Go back to Quiz Menu</Link>
                </div>
            )}
        </div>
    );
}

export default HttpStatus62;
