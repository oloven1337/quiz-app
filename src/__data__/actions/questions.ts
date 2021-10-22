import {Dispatch} from "react";
import axios from 'axios'

import * as types from '../action-types'

export const getQuestions = (numberQuestion: number, category: string, difficulty: string) => async (dispatch: Dispatch<any>) => {
    const t = 'https://opentdb.com/api.php?amount=10&category=25&difficulty=medium'
    console.log(numberQuestion, category, difficulty)
    try {
        dispatch({
            type: types.FETCHING_QUESTIONS_REQUEST
        })

        const {data} = await axios.get(t)

        console.log(data)

    } catch (error) {
        console.log(error)
    }
}
