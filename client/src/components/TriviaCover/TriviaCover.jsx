import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchShow } from '../../common/redux/actions';
import Loader from "react-loader-spinner";
import styles from './TriviaCover.module.css'
import { useParams } from 'react-router-dom';

export default function TriviaCover () {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);
    const { category } = useParams();

    function handleStartClick() {
        dispatch(switchShow('questions'))
    }

    return (
        <div className={styles.container}>
            {
                Object.keys(trivia).length === 0 || trivia.category !== category ?
                <Loader 
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    className={styles.loader}
                />
                :
                <>
                    <h1 className={styles.categoryName}>{trivia.title}</h1>
                    <center><h5 className={styles.startMsg}>Para ganar debes contestar bien el 75% de las preguntas.
                    <br/> Tienes 10 segundos para contestar cada pregunta.</h5></center>
                    <h4 className={styles.instructionsMsg}>¿Estás listo? ¡Presiona 'Comenzar' para empezar a jugar!</h4>
                    <img className={styles.coverImg} src={trivia.image} alt="chains"/>
                    <button className={styles.btn} onClick={handleStartClick}>
                        Comenzar
                    </button>
                </>
            }
        </div>
    )
}