import React, { useEffect, useState } from 'react';
import { getTrivia } from '../../common/redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import TriviaCover from '../TriviaCover/TriviaCover';
import TriviaQuestions from '../TriviaQuestions/TriviaQuestions';

export default function Home() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.show)

    const [showQuestions, setShowQuestions] = useState(false)

    useEffect(() => {
        dispatch(getTrivia());
    }, [dispatch])


    return(
        <div> 
            <div>Trivia Home</div>
            { show === 'cover' ?
                <TriviaCover />
                : 
               <TriviaQuestions />
            }
        </div>
    )
}