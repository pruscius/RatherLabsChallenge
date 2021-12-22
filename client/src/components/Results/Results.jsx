import React from 'react'
import { useSelector } from 'react-redux'

export default function Results () {
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

    return ( 
        <div>
            <h4>Acertaste el {result}% de las preguntas</h4>
        </div>
    )
}