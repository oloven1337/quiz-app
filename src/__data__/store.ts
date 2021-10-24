import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import {question} from "./reducers/questions";
import {answers} from './reducers/answers'

const rootReducer = combineReducers({
    question,
    answers
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
