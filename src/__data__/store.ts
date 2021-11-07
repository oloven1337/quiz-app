import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";

import { answersSlice } from "./answersSlice";
import { questionsSlice } from "./questionsSlice";
import { recordsSlice } from './recordsSlice'

export interface IState {
    answers: {
        answers: {
            id: number,
            title: string,
            userAnswer: string | null,
            correctAnswer: string
        }
    },
    questions: {
        questions: {
            question: string,
            correct_answer: string,
            incorrect_answers: string[]
        }
    }
}

const rootReducer = combineReducers({
    answers: answersSlice.reducer,
    questions: questionsSlice.reducer,
    records: recordsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof store.getState>
// export type AppDispatch = AppStore['dispatch']
