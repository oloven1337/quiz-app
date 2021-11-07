import React from 'react';
import { Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components'

import { Records } from "./pages/Records";
import { Quiz } from "./pages/Quiz";
import { Question } from "./pages/Question";
import { Header } from "./components/Header";
import { questionsSelector } from './__data__/selectors/questions';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

export function App() {
    const questions = useSelector(questionsSelector)
    const [theme, setTheme] = React.useState('dark')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                {/* @ts-ignore */}
                <Header toggleTheme={(toggleTheme)} />
                <Route path="/" exact component={Quiz} />
                <Route path="/records" component={Records} />
                <Route path="/questions" component={() => <Question questions={questions} />} />
            </ThemeProvider>
        </>
    )
}
