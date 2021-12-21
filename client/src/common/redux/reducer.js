const initialState = {
    trivia: {},
    show: 'cover',
    answers: [],
    answered: false,
    showCorrect: false,
    questionIndex: 0,
    changeColorId,
    changeQuestionId
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRIVIA":
            return {
                ...state,
                trivia: action.payload
            }
        case "SWITCH_SHOW":
            return {
                ...state,
                show: action.payload
            }
        case "POST_ANSWER":
            return {
                ...state,
                answers: state.answers.concat(action.payload)
            }
        case "CHANGE_ANSWERED":
            return {
                ...state,
                answered: action.payload
            }
        case "CHANGE_SHOW_CORRECT":
            return {
                ...state,
                showCorrect: action.payload
            }
        case "CHANGE_QUESTION_INDEX":
            return {
                ...state,
                questionIndex: state.questionIndex + 1
            }
        default:
            return state;
    }
}

export default rootReducer;