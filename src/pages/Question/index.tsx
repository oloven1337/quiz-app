import React from 'react';

import {RadioButton} from "../../components/RadioButton";

interface IQuestion {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface IProps {
    questions: IQuestion[]
}

export const Question: React.FC<IProps> = ({questions}) => {
    const [countQuestions, setCountQuestions] = React.useState(0)
    const [state, setState] = React.useState('')

    const handleSelection = (e: string) => {
        setState(e)
    }

    const handlerSetCount = (questionTitle: string) => {
        console.log(questionTitle, state)
        setCountQuestions(prevState => prevState + 1)
    }

    if (countQuestions < questions.length) {
        const {question: questionTitle, incorrect_answers, correct_answer} = questions[countQuestions]
        const answers = [...incorrect_answers, correct_answer]

        return (
            <div>
                <h4>{questionTitle}</h4>
                <button onClick={() => handlerSetCount(questionTitle)}>next</button>
                <div>
                    {answers.map(answer => (
                        //@ts-ignore
                        <div onChange={(e) => handleSelection(e.target.value)}>
                            <RadioButton name="answers" key={answer} value={answer}/>
                        </div>
                        // <label key={answer}>
                        //     {answer}
                        //     <input type="radio" value={answer} key={answer}/>
                        // </label>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <h1>Вопросы закончились</h1>
    )
}
