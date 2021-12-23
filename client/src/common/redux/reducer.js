const initialState = {
    trivia: {},
    show: 'cover',
    answers: []
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
            if (action.payload === 'clean') {
                return {
                    ...state,
                    answers: []
                }
            } else {
                return {
                    ...state,
                    answers: state.answers.concat(action.payload)
                }
            }
        default:
            return state;
    }
}

export default rootReducer;