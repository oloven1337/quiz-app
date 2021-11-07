import { createSlice } from "@reduxjs/toolkit";

import { IAnswer } from "../models/IAnswer";

interface AnswerState {
    answers: IAnswer[],
    currentAnswers: number
}

const initialState: AnswerState = {
    answers: [],
    currentAnswers: 0
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswers(state, action) {
            state.answers.push(action.payload)
        },
        // setCurrentAnswers(state, action) {
        //     state.currentAnswers = action.payload
        // },
        clearAnswers(state) {
            state.answers = []
        }
    }
})

export const { setAnswers, clearAnswers } = answersSlice.actions
