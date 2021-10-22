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

const arr: number[] = []

const initialState = {
    questions: []
}

export interface Action {
    type: string,
    payload?: IQuestion[]
}

export const question = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.FETCHING_QUESTIONS_REQUEST: {
            return {...state}
        }
        case types.FETCHING_QUESTIONS_SUCCESS: {
            return {...state}
        }
        case types.FETCHING_QUESTIONS_ERROR: {
            return {...state}
        }
        default: {
            return {...state}
        }
    }
}
