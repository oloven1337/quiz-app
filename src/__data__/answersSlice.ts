import {createSlice} from "@reduxjs/toolkit";

import {IAnswer} from "../models/IAnswer";

interface AnswerState {
    answers: IAnswer[]
}

const initialState: AnswerState = {
    answers: []
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswers(state, action) {
            state.answers.push(action.payload)
        },
        clearAnswers(state) {
            state.answers = []
        }
    }
})

export const {setAnswers, clearAnswers} = answersSlice.actions
