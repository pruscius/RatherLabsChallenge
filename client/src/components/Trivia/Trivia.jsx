import React from 'react';
import { useSelector } from 'react-redux';
import TriviaCover from '../TriviaCover/TriviaCover';
import TriviaQuestions from '../TriviaQuestions/TriviaQuestions';

export default function Trivia () {
    const show = useSelector(state => state.show);

    return (
        <div>
               { show === 'cover' ?
                <TriviaCover />
                : 
               <TriviaQuestions />
            }
        </div>
    )
}