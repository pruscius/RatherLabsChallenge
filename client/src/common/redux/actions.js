import axios from 'axios';

const GET_TRIVIA = "GET_TRIVIA";
const SWITCH_SHOW = "SWITCH_SHOW";
const POST_ACTION = "POST_ACTION";

export function getTrivia(category) {
    return async function (dispatch) {
        try {
            const trivia = await axios.get(`https://rather-labs-challenge-api.herokuapp.com/trivia/1?category=${category}`)
            dispatch({
                type: GET_TRIVIA,
                payload: trivia.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function switchShow(show) {
    return {
        type: SWITCH_SHOW,
        payload: show
    }
}

export function postAnswer(value) {
    return {
        type: POST_ACTION,
        payload: value
    }
}
