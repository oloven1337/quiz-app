import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {answersSelector} from '../../__data__/selectors/answers';
import {putToLocalStorage} from '../../__data__/recordsSlice'

import {Wrapper, ItemStyled, TitleStyled} from "./style";

export const Result: React.FC = () => {
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    const answers = useSelector(answersSelector)
    const dispatch = useDispatch()
    let correctAnswersCount = 0

    React.useEffect(() => {
        setCorrectAnswers(correctAnswersCount)
    }, [correctAnswersCount])

    React.useEffect(() => {
        return () => {
            dispatch(putToLocalStorage({correctAnswersCount, answers: answers.length}))
        }
    }, [dispatch, correctAnswersCount, answers.length])

    return (
        <Wrapper>
            <TitleStyled>
                Количество правильных ответов: {correctAnswers}
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
