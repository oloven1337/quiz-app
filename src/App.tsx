import React from 'react';
import {Route} from 'react-router-dom'

import {Records} from "./pages/Records";
import {Quiz} from "./pages/Quiz";

export function App() {
    return (
        <>
            <Route path="/" exact component={Quiz}/>
            <Route path="/records" component={Records}/>
        </>
    )
}
