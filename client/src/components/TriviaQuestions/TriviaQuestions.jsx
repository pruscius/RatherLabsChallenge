import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer, changeAnswered, changeShowCorrect, changeQuestionIndex } from '../../common/redux/actions';
import QuestionOptions from '../QuestionOptions/QuestionOptions';
// import ProgressBar from '../ProgressBar/ProgressBar';

export default function TriviaQuestions() {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);
    const answers = useSelector(state => state.answers);
    const showCorrect = useSelector(state => state.showCorrect);
    const answered  = useSelector(state => state.answered);
    const questionIndex = useSelector(state => state.questionIndex);
    let changeColorId = useSelector(state => state.changeColorId);
    let changeQuestionId = useSelector(state => state.changeQuestionId);

    // var changeColorId;
    // var changeQuestionId;

    // CHANGE INDEX
    function changeIndex() {
        if (questionIndex < trivia.questions.length - 1) {
            dispatch(changeShowCorrect(false));
            dispatch(changeQuestionIndex());
            dispatch(changeAnswered(false));
        }
    }   
    
    const changeQuestionTimeout = () => {
        changeQuestionId = setTimeout(changeIndex, 1000);         
    }
    
    // CHANGE COLOR
    function changeColor () {
        dispatch(changeAnswered(true));
        dispatch(changeShowCorrect(true));
        changeQuestionTimeout();
    }

    const changeColorTimeout = () => {
        changeColorId = setTimeout(changeColor, trivia.questions[questionIndex].lifetimeSeconds * 1000);
    }

    useEffect(() => {
        if (!answered) {
            changeColorTimeout();
        }
    })

    return(
        <div>
            {/* <ProgressBar lifetimeSeconds={trivia.questions[questionIndex].lifetimeSeconds}/> */}

            <img src={trivia.questions[questionIndex].image}/>
            <h4>{trivia.questions[questionIndex].text}</h4>
            {
                trivia.questions[questionIndex].options.map((option, index) => (
                    <QuestionOptions 
                        id={index}
                        text={option.text}
                        correct={option.correct}    
                        changeColorId={changeColorId}
                        changeColor={changeColor}
                    />
                ))
            }
        </div>
    )
}