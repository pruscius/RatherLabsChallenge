import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TriviaQuestions() {
    const dispatch = useDispatch();
    const trivia = useSelector(state => state.trivia);

    return(
        <div>
            <img src={trivia.questions[0].image}/>
            <h4>{trivia.questions[0].text}</h4>
            {
                trivia.questions[0].options.map((o, i) => (
                    <p key={i}>{o.text}</p>
                ))
            }
        </div>
    )
}