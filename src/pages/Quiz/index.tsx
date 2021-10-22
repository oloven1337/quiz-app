import React from 'react';
import {WrapperQuizStyled, WrapperRadioStyled} from "./style";
import {RadioButton} from "../../components/RadioButton";
import {Select} from "../../components/Select";
import {useDispatch} from "react-redux";
import {getQuestions} from "../../__data__/actions/questions";

export const Quiz: React.FC = () => {
    const [numberQuestion, setNumberQuestion] = React.useState<number>(0)
    const [categories, setCategories] = React.useState<string>('')
    const [difficulty, setDifficulty] = React.useState<string>('')

    const dispatch = useDispatch()

    const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberQuestion(+e.target.value)
    }

    const handleChangeCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategories(e.target.value)
    }

    const handleChangeDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(e.target.value)
    }

    const categoriesArr = [
        'Sports',
        'Art',
        'History',
        'Animals',
    ]
    const difficultyArr = [
        'Easy',
        'Medium',
        'Hard'
    ]

    const getQ = () => {
        dispatch(getQuestions(numberQuestion, categories, difficulty))
    }

    return (
        <WrapperQuizStyled>
            <WrapperRadioStyled>
                <span>Количество вопросов:</span>
                <div>
                    <RadioButton value={10} handleChangeCountQuestion={handleChangeCount}/>
                    <RadioButton value={20} handleChangeCountQuestion={handleChangeCount}/>
                    <RadioButton value={30} handleChangeCountQuestion={handleChangeCount}/>
                </div>
            </WrapperRadioStyled>
            <WrapperRadioStyled>
                <span>Выберите категорию:</span>
                <div>
                    <Select handleChange={handleChangeCategories} arr={categoriesArr}/>
                </div>
            </WrapperRadioStyled>
            <WrapperRadioStyled>
                <span>Выберите сложность:</span>
                <div>
                    <Select handleChange={handleChangeDifficulty} arr={difficultyArr}/>
                </div>
            </WrapperRadioStyled>
            <button onClick={getQ}>click</button>
        </WrapperQuizStyled>
    )
}
