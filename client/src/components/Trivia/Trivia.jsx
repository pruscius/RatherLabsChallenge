import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrivia, postAnswer, switchShow } from '../../common/redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import TriviaCover from '../TriviaCover/TriviaCover';
import TriviaQuestions from '../TriviaQuestions/TriviaQuestions';
import styles from './Trivia.module.css';

export default function Trivia () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { category } = useParams();

    const show = useSelector(state => state.show);

    function handleBack() {
        dispatch(switchShow('cover'));
        dispatch(postAnswer('clean'));
        navigate("/");
    }

    useEffect(() => {
        dispatch(getTrivia(category));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h2 className={styles.back} onClick={handleBack}>{'\u{1F870}'}</h2>
               { show === 'cover' ?
                <div className={styles.cover}>
                    <TriviaCover />
                </div>
                : 
                <div>
                    <TriviaQuestions />
                </div>
            }
        </div>
    )
}