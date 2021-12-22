import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../../common/redux/actions';
// import ProgressBar from '../ProgressBar/ProgressBar';

export default function TriviaQuestions() {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);

    const navigate = useNavigate();

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
    }, [callChangeColor, answered]);

    return(
        <div>
            {/* <ProgressBar lifetimeSeconds={trivia.questions[questionIndex].lifetimeSeconds}/> */}

            <img src={trivia.questions[questionIndex].image}/>
            <h4>{trivia.questions[questionIndex].text}</h4>
            {
                trivia.questions[questionIndex].options.map((option, index) => {
                    return (
                    <p 
                        data-correct={option.correct}
                        onClick={handleOptionClick}
                        key={index}
                        style={option.correct && showCorrect ? {color: 'green', borderStyle: 'solid'} : null}    
                    >{option.text}</p>
                )})
            }
        </div>
    )
}