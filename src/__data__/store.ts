import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "redux";
import {answersSlice} from "./answersSlice";
import {questionsSlice} from "./questionSlice";

const rootReducer = combineReducers({
    answers: answersSlice.reducer,
    questions: questionsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']
