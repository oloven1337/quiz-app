import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Result} from "../Result";
import {RadioButton} from "../../components/RadioButton";
import {setAnswers} from "../../__data__/actions/answers";
import {answersLoaderSelector} from "../../__data__/selectors/questions";

import {ButtonStyled, WrapperAnswersItem, WrapperStyled} from "./style";

interface IQuestion {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface IProps {
    questions: IQuestion[]
}

export const Question: React.FC<IProps> = ({questions}) => {
    const [countQuestions, setCountQuestions] = React.useState<number>(0)
    const [userAnswer, setUserAnswer] = React.useState<string>('')

    const dispatch = useDispatch()
    const answersLoader = useSelector(answersLoaderSelector())

    React.useEffect(() => {
    }, [countQuestions])

    if (countQuestions < questions.length) {
        const {
            question: questionTitle,
            incorrect_answers: incorrectAnswers,
            correct_answer: correctAnswer
        } = questions[countQuestions]

        const answers = [...incorrectAnswers, correctAnswer]

        const handleSelection = (eValue: string) => {
            setUserAnswer(eValue)
        }

        const handlerSetCount = (questionTitle: string) => {
            dispatch(setAnswers({id: countQuestions, title: questionTitle, userAnswer, correctAnswer}))
            const value = countQuestions + 1
            const nextCount = value < questions.length ? value : questions.length
            setCountQuestions(nextCount)
        }
        return (
            <WrapperStyled>
                <h4>{questionTitle}</h4>
                <WrapperAnswersItem>
                    {answers.map(answer => (
                        <div key={answer}
                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelection(e.target.value)}>
                            <RadioButton name="answers" key={answer} value={answer}/>
                        </div>
                    ))}
                </WrapperAnswersItem>
                <ButtonStyled variant="contained" color="success" onClick={() => handlerSetCount(questionTitle)}>
                    Дальше
                </ButtonStyled>
            </WrapperStyled>
        )
    }

    if (answersLoader) {
        return <h1>Loading...</h1>
    }

    if (questions.length === 0) {
        return (
            <h1>Вы не начинали тест</h1>
        )
    }

    return (
        <Result/>
    )
}
