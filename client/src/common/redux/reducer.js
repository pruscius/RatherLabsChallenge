const initialState = {
    trivia: {},
    show: 'cover'
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
        default:
            return state;
    }
}

export default rootReducer;