import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../../common/redux/actions';
import styles from './TriviaQuestions.module.css'
// import ProgressBar from '../ProgressBar/ProgressBar';

export default function TriviaQuestions() {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);

    const navigate = useNavigate();

    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [userAnswered, setUserAnswered] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showCorrect, setShowCorrect] = useState(false);
    const [callChangeColor, setCallChangeColor] = useState(false);

    var changeColorId;
    var changeQuestionId;

    // CHANGE INDEX
    function changeIndex() {
        if (questionIndex < trivia.questions.length - 1) {
            setShowCorrect(false);
            setQuestionIndex(questionIndex => questionIndex + 1);
            setUserAnswered(false);
            setAnswered(false);
        } else {
            navigate("/results");
        }
    }   
    
    const changeQuestionTimeout = () => {
        changeQuestionId = setTimeout(changeIndex, 1000);         
    }
    
    // CHANGE COLOR
    function changeColor () {
        if (!userAnswered) {
            dispatch(postAnswer(false));
        }
        setAnswered(true);
        setShowCorrect(true);
        changeQuestionTimeout();
        setCallChangeColor(false);
    }

    const changeColorTimeout = () => {
        changeColorId = setTimeout(changeColor, trivia.questions[questionIndex].lifetimeSeconds * 1000);
    }

    // BUTTON CLICK
    function handleOptionClick(e) {
        if (!answered) {
            setSelectedAnswer(e.target.title)
            dispatch(postAnswer(e.target.dataset.correct));
            setUserAnswered(true);
            setAnswered(true);
            clearTimeout(changeColorId);
            setCallChangeColor(true);
        }
    }

    useEffect(() => {
        if (!answered) {
            changeColorTimeout();
        }
        if (callChangeColor) {
            changeColor();
        }
        return () => clearTimeout(changeColorId);
    }, [callChangeColor, answered]);

    return(
        <div className={styles.container}>
            {/* <ProgressBar lifetimeSeconds={trivia.questions[questionIndex].lifetimeSeconds}/> */}

            <img src={trivia.questions[questionIndex].image}/>
            <h4 className={styles.question}>{trivia.questions[questionIndex].text}</h4>
            {
                trivia.questions[questionIndex].options.map((option, index) => {
                    let answerTitle = `option${index}`
                    return (
                    <h5 
                        title={answerTitle}
                        data-correct={option.correct}
                        onClick={handleOptionClick}
                        key={index}
                        className={
                            option.correct && showCorrect ? styles.correctOption 
                            : showCorrect && selectedAnswer === answerTitle ? styles.incorrectOption
                            : styles.option
                        }   
                    >{option.text}</h5>
                )})
            }
        </div>
    )
}