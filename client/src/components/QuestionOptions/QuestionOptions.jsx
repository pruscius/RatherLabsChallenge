import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAnswered } from "../../common/redux/actions";

export default function QuestionOptions ({ text, correct, changeColorId, id, changeColor }) {
    const dispatch = useDispatch(); 
    const showCorrect = useSelector(state => state.showCorrect);

    // BUTTON CLICK
    function handleOptionClick() {
        // dispatch(postAnswer(option.correct))
        dispatch(changeAnswered(true));
        clearTimeout(changeColorId);
        changeColor();
    }

    return (
        <div key={id}>
            <p 
                onClick={handleOptionClick} 
                style={correct && showCorrect ? {color: 'green', borderStyle: 'solid'} : null}    
            >{text}</p>
        </div>
    )
}