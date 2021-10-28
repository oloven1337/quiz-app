import React from 'react';
import {useSelector} from "react-redux";

import {answersSelector} from "../../__data__/selectors/answers";
import {Wrapper, WrapperItem} from "./style";

interface Answers {
    id: number,
    title: string,
    userAnswer: string | null,
    correctAnswer: string
}

export const Result: React.FC = () => {
    const [state, setState] = React.useState(0)
    //@ts-ignore
    const answers: Answers[] = useSelector((state) => state.answers.answers)
    // const answers: Answers[] = useSelector(answersSelector())
    let correctAnswersCount: number = 0

    React.useEffect(() => {
        setState(correctAnswersCount)
    }, [correctAnswersCount])

    return (
        <Wrapper>
            {state}
            {answers.map(({id, title, userAnswer, correctAnswer}) => {
                const right = userAnswer === correctAnswer
                if (right) {
                    console.log(correctAnswersCount)
                    correctAnswersCount = correctAnswersCount + 1
                }

                return (
                    <WrapperItem key={id} right={right}>
                        <div>
                            <span>Вопрос номер: {id + 1}</span>
                            <div>{title}</div>
                        </div>
                        <div>
                            <span>Ваш ответ: </span>
                            <span>{userAnswer}</span>
                        </div>
                        <div>
                            <span>Правильный ответ: </span>
                            <span>{correctAnswer}</span>
                        </div>
                    </WrapperItem>
                )
            })}
        </Wrapper>
    );
};
