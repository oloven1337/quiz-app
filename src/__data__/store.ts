import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import {question} from "./reducers/questions";

const rootReducer = combineReducers({
    question
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
