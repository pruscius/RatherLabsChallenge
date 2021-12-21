import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../../common/redux/actions';
// import ProgressBar from '../ProgressBar/ProgressBar';

export default function TriviaQuestions() {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);
    const answers = useSelector(state => state.answers);

    const [answered, setAnswered] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showCorrect, setShowCorrect] = useState(false);

    var changeColorId;
    var changeQuestionId;

    // CHANGE INDEX
    function changeIndex() {
        if (questionIndex < trivia.questions.length - 1) {
            setShowCorrect(false);
            setQuestionIndex(questionIndex => questionIndex + 1);
            setAnswered(false);
        }
    }   
    
    const changeQuestionTimeout = () => {
        changeQuestionId = setTimeout(changeIndex, 1000);         
    }
    
    // CHANGE COLOR
    function changeColor () {
        setAnswered(true);
        setShowCorrect(true);
        changeQuestionTimeout();
    }

    const changeColorTimeout = () => {
        changeColorId = setTimeout(changeColor, trivia.questions[questionIndex].lifetimeSeconds * 1000);
    }

    // BUTTON CLICK
    function handleOptionClick() {
        // dispatch(postAnswer(option.correct))
        setAnswered(true);
        clearTimeout(changeColorId);
        changeColor();
    }

    useEffect(() => {
        if (!answered) {
            changeColorTimeout();
        }
    })

    // Necesito renderizar un elemento de un array
    // El renderizado tiene que ocurrir por una determinada (intervalo)
    // Ese intervalo está determinadd por la propiedad lifetimeSeconds del elemento mismo.
    // El índice del elemento que renderizo tiene que cambiar cuando se cumple el intervalo.
    // Entonces, el el índice va a ser dinámico/variable. 
    // CLAVE: ¿Cómo cambio el valor del índice cuando se cumple el intervalo?
    //        Escribo una función que utilice:
    //          - 1) setTimeout
    //          - 2) setInterval
    //        En ambos casos, el intervalo va a estar determinado por lifetimeSeconds * 1000. 
    // PROBLEMAS: dónde ubicar la función set.

    // setTimeout(() => {
    //     // console.log('OUTER QUESTION INDEX', questionIndex)
    //     // console.log('OUTER LIFETIMeSEC', trivia.questions[questionIndex].lifetimeSeconds)
    //     if (questionIndex < trivia.questions.length - 1) {
    //         // console.log('INNER QUESTION INDEX BEFORE', questionIndex)
    //         // console.log('INNER LIFETIMESEC BEFORE', trivia.questions[questionIndex].lifetimeSeconds)
    //         setQuestionIndex(questionIndex => questionIndex + 1);
    //         // console.log('INNER QUESTION INDEX AFTER', questionIndex)
    //         // console.log('INNER LIFETIMESEC AFTER', trivia.questions[questionIndex].lifetimeSeconds)
    //     } 
    //     // else {
    //     //     // renderizar resultado
    //     // }
    // }, trivia.questions[questionIndex].lifetimeSeconds * 1000);  

    return(
        <div>
            {/* <ProgressBar lifetimeSeconds={trivia.questions[questionIndex].lifetimeSeconds}/> */}

            <img src={trivia.questions[questionIndex].image}/>
            <h4>{trivia.questions[questionIndex].text}</h4>
            {
                trivia.questions[questionIndex].options.map((option, index) => {
                    return (
                    <p 
                        onClick={handleOptionClick} 
                        key={index}
                        style={option.correct && showCorrect ? {color: 'green', borderStyle: 'solid'} : null}    
                    >{option.text}</p>
                )})
            }
        </div>
    )
}