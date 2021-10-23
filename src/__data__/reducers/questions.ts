import * as types from '../action-types'

interface IQuestion {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: [
            string | boolean,
        string?,
        string?
    ]
}

const initialState = {
    questions: [],
    isFetching: false
}

export interface Action {
    type: string,
    payload?: IQuestion[]
}

export const question = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.FETCHING_QUESTIONS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCHING_QUESTIONS_SUCCESS: {
            return {
                ...state,
                questions: action.payload,
                isFetching: false
            }
        }
        case types.FETCHING_QUESTIONS_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }
        default: {
            return {...state}
        }
    }
}
