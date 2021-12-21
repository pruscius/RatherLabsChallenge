import axios from 'axios';

const GET_TRIVIA = "GET_TRIVIA";
const SWITCH_SHOW = "SWITCH_SHOW";
const POST_ACTION = "POST_ACTION";
const CHANGE_ANSWERED = "CHANGE_ANSWERED";
const CHANGE_SHOW_CORRECT = "CHANGE_SHOW_CORRECT";
const CHANGE_QUESTION_INDEX = "CHANGE_QUESTION_INDEX";

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

export function changeAnswered(bool) {
    return {
        type: CHANGE_ANSWERED,
        payload: bool
    }
}

export function changeShowCorrect(bool) {
    return {
        type: CHANGE_SHOW_CORRECT,
        payload: bool
    }
}

export function changeQuestionIndex() {
    return {
        type: CHANGE_QUESTION_INDEX
    }
}