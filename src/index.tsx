import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";

import {App} from './App';
import {Header} from "./components/Header";

import './index.css';
import {store} from "./__data__/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
