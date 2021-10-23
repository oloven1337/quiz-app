import React from 'react';

import {RadioButton} from "../../components/RadioButton";
import {Select} from "../../components/Select";
import {useDispatch, useSelector} from "react-redux";
import {getQuestions} from "../../__data__/actions/questions";
import {questionsSelector} from "../../__data__/selectors/selectors";
import {Question} from '../Question/'

import {WrapperSettingsQuizStyled, WrapperStyled} from "./style";

export const Quiz: React.FC = () => {
    const [numberQuestion, setNumberQuestion] = React.useState<number>(0)
    const [categories, setCategories] = React.useState<string>('')
    const [difficulty, setDifficulty] = React.useState<string>('')

    const dispatch = useDispatch()
    const questions = useSelector(questionsSelector)

    const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberQuestion(+e.target.value)
    }

    const handleChangeCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategories(e.target.value)
    }

    const handleChangeDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(e.target.value)
    }

    const categoryValues: object = {
        Sports: 21,
        Art: 25,
        History: 23,
        Animals: 27,
    }

    const difficultyArr = [
        'Easy',
        'Medium',
        'Hard'
    ]

    const handlerGetQuestion = () => {
        if (numberQuestion && categories && difficulty) {
            const categoryName = Object.keys(categoryValues).indexOf(categories)
            const categoryId = Object.values(categoryValues)[categoryName]
            console.log(categories)
            dispatch(getQuestions(numberQuestion, categoryId, difficulty))
        } else {
            console.log('заполнены не все поля')
        }
    }

    if (questions.length !== 0) {
        return <Question questions={questions}/>
    }

    return (
        <WrapperSettingsQuizStyled>
            <WrapperStyled>
                <span>Количество вопросов:</span>
                <div>
                    <RadioButton name="countQuestion" value={10} handleChangeCountQuestion={handleChangeCount}/>
                    <RadioButton name="countQuestion" value={20} handleChangeCountQuestion={handleChangeCount}/>
                    <RadioButton name="countQuestion" value={30} handleChangeCountQuestion={handleChangeCount}/>
                </div>
            </WrapperStyled>
            <WrapperStyled>
                <span>Выберите категорию:</span>
                <div>
                    <Select handleChange={handleChangeCategories} arr={Object.keys(categoryValues)}/>
                </div>
            </WrapperStyled>
            <WrapperStyled>
                <span>Выберите сложность:</span>
                <div>
                    <Select handleChange={handleChangeDifficulty} arr={difficultyArr}/>
                </div>
            </WrapperStyled>
            <button onClick={handlerGetQuestion}>Получить вопросы</button>
        </WrapperSettingsQuizStyled>
    )
}
