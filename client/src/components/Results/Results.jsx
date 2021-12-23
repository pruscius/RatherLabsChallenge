import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchShow, postAnswer } from '../../common/redux/actions';
import styles from './Results.module.css'

export default function Results () {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers);

    function getCorrectAnswers(answers) {
        let sum = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === 'true') sum+= 1
        }
        return sum;
    }
    
    const correctAnswers = getCorrectAnswers(answers);
    
    const result = correctAnswers * 100 / answers.length;

    function handleGoToHome() {
        dispatch(switchShow('cover'));
        dispatch(postAnswer('clean'))
    }

    return ( 
        <div className={styles.container}>
            <h4 className={styles.resultMsg}>Acertaste el {result}% de las preguntas</h4>
            <Link className={styles.link} to="/">
                <button className={styles.btn} onClick={handleGoToHome}>
                   Volver al Inicio
                </button>
            </Link>
        </div>
    )
}