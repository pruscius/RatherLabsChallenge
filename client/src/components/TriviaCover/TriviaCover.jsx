import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchShow } from '../../common/redux/actions';
import Loader from "react-loader-spinner";

export default function TriviaCover () {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);

    function handleStartClick() {
        dispatch(switchShow())
    }

    return (
        <div>
            {
                Object.keys(trivia).length === 0 ?
                <Loader 
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
                :
                <>
                    <header>{trivia.title}</header>
                    <img src={trivia.image} alt="chains"/>
                    <button onClick={handleStartClick}>Comenzar</button>
                </>
            }
        </div>
    )
}