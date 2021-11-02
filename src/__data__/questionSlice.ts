import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {IQuestion} from "../models/IQuestion";
import {FetchQuestionsTypes} from "../models/FetchQuestionsTypes";

interface QuestionState {
    questions: IQuestion[],
    isFetching: boolean
}

const initialState: QuestionState = {
    questions: [],
    isFetching: false
}

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async ({numberQuestion, category, difficulty}: FetchQuestionsTypes, {rejectWithValue}) => {
        const url = `https://opentdb.com/api.php?amount=${numberQuestion}&category=${category}&${difficulty}=medium`
        const {data} = await axios.get(url)
        //@ts-ignore
        return data.results
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
    extraReducers: {
        //@ts-ignore
        [fetchQuestions.pending]: (state) => {
            state.isFetching = true
        },
        //@ts-ignore
        [fetchQuestions.fulfilled]: (state, action) => {
            state.isFetching = false
            state.questions = action.payload
        }
    }
})

export const {getQuestions, clearQuestions} = questionsSlice.actions
