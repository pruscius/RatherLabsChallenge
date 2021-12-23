import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchShow } from '../../common/redux/actions';
import Loader from "react-loader-spinner";
import styles from './TriviaCover.module.css'

export default function TriviaCover () {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);

    function handleStartClick() {
        dispatch(switchShow('questions'))
    }

    return (
        <div className={styles.container}>
            {
                Object.keys(trivia).length === 0 ?
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
                    <img src={trivia.image} alt="chains"/>
                    <button className={styles.btn} onClick={handleStartClick}>
                        Comenzar
                    </button>
                </>
            }
        </div>
    )
}