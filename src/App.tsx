import React from 'react';
import {Route} from 'react-router-dom'
import {useSelector} from "react-redux";

import {Records} from "./pages/Records";
import {Quiz} from "./pages/Quiz";
import {Question} from "./pages/Question";
import {questionsSelector} from "./__data__/selectors/questions";
import {Header} from "./components/Header";

export function App() {
    const questions = useSelector(questionsSelector)

    return (
        <>
            <Header/>
            <Route path="/" exact component={Quiz}/>
            <Route path="/records" component={Records}/>
            <Route path="/questions" component={() => <Question questions={questions}/>}/>
        </>
    )
}
