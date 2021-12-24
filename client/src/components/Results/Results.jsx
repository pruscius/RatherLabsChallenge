import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchShow, postAnswer } from '../../common/redux/actions';
import Leo from '../../common/assets/leonardo-dicaprio.gif'
import Barney from '../../common/assets/barney-challenge.gif'
import styles from './Results.module.css'

export default function Results () {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers);
    const trivia = useSelector(state => state.trivia);

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
            <center>
                <h4 className={styles.resultMsg}>Acertaste el {result}% de las respuestas</h4>
            </center>
            { result >= 75 ?
                <div className={styles.congratsContainer}>
                        <h2 className={styles.congratsOrNot}>¡Has ganado!</h2>
                    <img className={styles.gif} src={Leo} alt="Leo DiCaprio" />
                </div> 
                : 
                <div className={styles.congratsContainer}>
                    <center><h2 className={styles.congratsOrNot}>Lo sentimos, no has superado la prueba.
                    <br/>¡Sigue intentándolo!</h2></center>
                    <img className={styles.gif2} src={Barney} alt=""/>
                </div>
            }
            <Link className={styles.link} to="/">
                <button className={styles.btn} onClick={handleGoToHome}>
                   Volver a jugar
                </button>
            </Link>
        </div>
    )
}