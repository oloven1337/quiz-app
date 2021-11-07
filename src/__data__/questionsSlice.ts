import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { IQuestion } from "../models/IQuestion";
import { FetchQuestionsTypes } from "../models/FetchQuestionsTypes";

interface QuestionState {
    questions: IQuestion[],
    isFetching: boolean,
    isError: boolean
}

const initialState: QuestionState = {
    questions: [],
    isFetching: false,
    isError: false
}

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async ({ numberQuestion, category, difficulty }: FetchQuestionsTypes, { rejectWithValue }): Promise<any> => {
        try {
            console.log(difficulty)
            // const url = `https://opentdb.com/api.php?amount=${numberQuestion}&category=${category}&difficulty=${difficulty.toLocaleLowerCase()}`
            // const { data } = await axios.get(url)
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
            //@ts-ignore
            return arr
        } catch (error) {
            //@ts-ignore
            return rejectWithValue(error.message)
        }
    }
)

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        getQuestions(state, action) {
            console.log(action)
            state.questions.push(action.payload)
        },
        clearQuestions(state) {
            state.questions = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state: QuestionState) => {
            state.isError = false
            state.isFetching = true
        })
        builder.addCase(fetchQuestions.fulfilled, (state: QuestionState, action: PayloadAction<IQuestion[]>) => {
            state.isFetching = false
            state.questions = action.payload
        })
        builder.addCase(fetchQuestions.rejected, (state: QuestionState, action) => {
            state.isFetching = false
            state.isError = true
        })
    }
})

export const { getQuestions, clearQuestions } = questionsSlice.actions
