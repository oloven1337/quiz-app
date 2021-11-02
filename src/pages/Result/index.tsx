import React from 'react';
import {useSelector} from "react-redux";

import {Wrapper, ItemStyled, TitleStyled} from "./style";

interface IState {
    answers: {
        answers: {
            id: number,
            title: string,
            userAnswer: string | null,
            correctAnswer: string
        }
    }
}

export const Result: React.FC = () => {
    const [state, setState] = React.useState(0)
    //@ts-ignore
    const answers: IAnswers[] = useSelector((state) => state.answers.answers)
    let correctAnswersCount: number = 0
    React.useEffect(() => {
        setState(correctAnswersCount)
    }, [correctAnswersCount])

    return (
        <Wrapper>
            <TitleStyled>
                Количество правильных ответов: {state}
            </TitleStyled>
            {answers.map(({id, title, userAnswer, correctAnswer}) => {
                const right = userAnswer === correctAnswer
                if (right) {
                    correctAnswersCount = correctAnswersCount + 1
                }

                return (
                    <ItemStyled key={id} right={right}>
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
                    </ItemStyled>
                )
            })}
        </Wrapper>
    );
};
