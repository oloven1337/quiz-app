import {Dispatch} from "react";
import axios from 'axios'

import * as types from '../action-types'
import {CLEAR_QUESTIONS} from "../action-types";

export const getQuestions = (numberQuestion: number, category: string, difficulty: string) => async (dispatch: Dispatch<any>) => {
    const url = `https://opentdb.com/api.php?amount=${numberQuestion}&category=${category}&${difficulty}=medium`

    try {
        dispatch({
            type: types.FETCHING_QUESTIONS_REQUEST
        })

        const {data} = await axios.get(url)
        console.log('data', data)

        dispatch({
            type: types.FETCHING_QUESTIONS_SUCCESS,
            //@ts-ignore
            payload: data.results
        })

    } catch (error) {
        console.log(error)
    }
}

export const clearQuestions = () => (
    {type: CLEAR_QUESTIONS}
)
