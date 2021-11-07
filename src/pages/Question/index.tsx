import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Result } from "../Result";

import { RadioButton } from "../../components/RadioButton";
import { setAnswers } from "../../__data__/answersSlice";
import { IQuestion } from "../../models/IQuestion";
import { hasErrorSelector, isFetchingSelector } from '../../__data__/selectors/questions';

import { ButtonStyled, WrapperAnswersItem, WrapperStyled } from "./style";

interface IProps {
    questions: IQuestion[]
}

export const Question: React.FC<IProps> = ({ questions }) => {
    const [countQuestions, setCountQuestions] = React.useState(0)
    const [userAnswer, setUserAnswer] = React.useState('')

    const dispatch = useDispatch()
    const isFetching = useSelector(isFetchingSelector)
    const hasError = useSelector(hasErrorSelector)

    React.useEffect(() => {
    }, [countQuestions])
    
    const handleSelection = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value)
    }, [])

    const handlerSetCount = useCallback(() => {
        const {
            question: questionTitle,
            correct_answer: correctAnswer
        } = questions[countQuestions]

        dispatch(setAnswers({
            id: countQuestions,
            title: questionTitle,
            userAnswer,
            correctAnswer
        }))
        const value = countQuestions + 1
        const nextCount = value < questions.length ? value : questions.length
        setCountQuestions(nextCount)
    }, [dispatch, countQuestions, userAnswer, questions])

    if (hasError) {
        return <h1>Произошла ошибка</h1>
    }

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    if (questions.length === 0) {
        return (
            <h1>Вы не начинали тест</h1>
        )
    }

    if (countQuestions < questions.length) {
        const {
            question: questionTitle,
            incorrect_answers: incorrectAnswers,
            correct_answer: correctAnswer
        } = questions[countQuestions]

        const answers = [...incorrectAnswers, correctAnswer]
        return (
            <WrapperStyled>
                <h4>{questionTitle}</h4>
                <WrapperAnswersItem>
                    {answers.map(answer => (
                        <div key={answer} onChange={handleSelection}>
                            <RadioButton name="answers" key={answer} value={answer} />
                        </div>
                    ))}
                </WrapperAnswersItem>
                <ButtonStyled variant="contained" color="success" onClick={handlerSetCount}>
                    Дальше
                </ButtonStyled>
            </WrapperStyled>
        )
    } else {

        return <Result />
    }
}
