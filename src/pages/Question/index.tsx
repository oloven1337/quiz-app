import React from 'react';
import {useDispatch} from "react-redux";

import {RadioButton} from "../../components/RadioButton";
import {setAnswers} from "../../__data__/actions/saveAnswers";

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
    const [userAnswer, setUserAnswer] = React.useState<string | null>(null)
    // const [time, setTime] = React.useState<number>(5)
    // const [correctAnswerState, setCorrectAnswerState] = React.useState<string>('')
    // const [titleState, setTitleState] = React.useState<string>('')
    const refInterval = React.useRef<number>()

    const dispatch = useDispatch()

    // React.useEffect(() => {
    //     //@ts-ignore
    //     refInterval.current = setInterval(() => {
    //         setTime(prevTime => prevTime - 1)
    //         console.log(time)
    //     }, 1000)
    //
    //     if (time === 0) {
    //         setCountQuestions(prevState => prevState + 1)
    //         setTime(5)
    //         setUserAnswer(null)
    //
    //         dispatch(setAnswers({
    //             id: countQuestions,
    //             title: titleState,
    //             userAnswer,
    //             correctAnswer: correctAnswerState
    //         }))
    //     }
    //     return () => {
    //         console.log('clear', refInterval.current)
    //         //@ts-ignore
    //         clearInterval(refInterval.current)
    //     }
    // }, [refInterval])

    if (countQuestions < questions.length) {
        const {
            question: questionTitle,
            incorrect_answers: incorrectAnswers,
            correct_answer: correctAnswer
        } = questions[countQuestions]

        const answers = [...incorrectAnswers, correctAnswer]

        const handleSelection = (e: string) => {
            setUserAnswer(e)
        }

        const handlerSetCount = (questionTitle: string) => {
            dispatch(setAnswers({id: countQuestions, title: questionTitle, userAnswer, correctAnswer}))
            const value = countQuestions + 1
            const nextCount = value < questions.length ? value : questions.length
            setCountQuestions(nextCount)
            // setCorrectAnswerState(correctAnswer)
            // setTitleState(questionTitle)
            clearInterval(refInterval.current)
            setUserAnswer(null)
        }
        return (
            <div>
                <h4>{questionTitle}</h4>
                <button onClick={() => handlerSetCount(questionTitle)}>next</button>
                <div>
                    {answers.map(answer => (
                        //@ts-ignore
                        <div key={answer} onChange={(e) => handleSelection(e.target.value)}>
                            <RadioButton name="answers" key={answer} value={answer}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (questions.length === 0) {
        return (
            <h1>Вы не начинали тест</h1>
        )
    }

    return (
        <h1>Вопросы закончились</h1>
    )
}
