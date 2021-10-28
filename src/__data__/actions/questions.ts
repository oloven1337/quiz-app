import {Dispatch} from "react";
import axios from 'axios'

import * as types from '../action-types'

interface I {
    category: string
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

interface IData {
    results: I[]
}

export const getQuestions = (numberQuestion: number, category: string, difficulty: string) => async (dispatch: Dispatch<any>) => {
    const t = `https://opentdb.com/api.php?amount=${numberQuestion}&category=${category}&${difficulty}=medium`
    try {
        dispatch({
            type: types.FETCHING_QUESTIONS_REQUEST
        })

        // const {data} = await axios.get(t)
        // console.log('data', data)

        const arr = [
            {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            }, {
                category: "Sports",
                correct_answer: "Duck",
                difficulty: "medium",
                incorrect_answers: ['Bye', 'Beamer', 'Carry'],
                question: "What cricketing term denotes a batsman being dismissed with a score of zero?"
            },
        ]


        dispatch({
            type: types.FETCHING_QUESTIONS_SUCCESS,
            //@ts-ignore
            payload: arr
        })

    } catch (error) {
        console.log(error)
    }
}
