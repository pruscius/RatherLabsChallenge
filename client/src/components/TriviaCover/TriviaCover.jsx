import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchShow } from '../../common/redux/actions';

export default function TriviaCover () {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);

    function handleStartClick() {
        dispatch(switchShow())
    }

    return (
        <div>
            <h2>{trivia.title}</h2>
            <img src={trivia.image} alt="chains"/>
            <button onClick={handleStartClick}>Comenzar</button>
        </div>
    )
}