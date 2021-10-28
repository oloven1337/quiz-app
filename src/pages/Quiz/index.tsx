import React from 'react';
import {Link} from "react-router-dom";

import {Button} from "../../components/Button";
import {RadioButton} from "../../components/RadioButton";
import {Select} from "../../components/Select";
import {useDispatch} from "react-redux";
import {getQuestions} from "../../__data__/actions/questions";

import {TextStyled, WrapperSettingsQuizStyled, WrapperStyled} from "./style";

export const Quiz: React.FC = () => {
    const [numberQuestion, setNumberQuestion] = React.useState<number>(0)
    const [categories, setCategories] = React.useState<string>('Sports')
    const [difficulty, setDifficulty] = React.useState<string>('Easy')
    const [boolBtn, setBoolBtn] = React.useState<boolean>(true)

    const dispatch = useDispatch()

    const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberQuestion(+e.target.value)
        setBoolBtn(false)
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
            dispatch(getQuestions(numberQuestion, categoryId, difficulty))
        }
    }

    return (
        <WrapperSettingsQuizStyled>
            <WrapperStyled>
                <TextStyled>Количество вопросов:</TextStyled>
                <div>
                    <RadioButton name="countQuestion" value={10} handleChangeCountQuestion={handleChangeCount}/>
                    <RadioButton name="countQuestion" value={20} handleChangeCountQuestion={handleChangeCount}/>
                    <RadioButton name="countQuestion" value={30} handleChangeCountQuestion={handleChangeCount}/>
                </div>
            </WrapperStyled>
            <WrapperStyled>
                <TextStyled>Выберите категорию:</TextStyled>
                <div>
                    <Select handleChange={handleChangeCategories} arr={Object.keys(categoryValues)}/>
                </div>
            </WrapperStyled>
            <WrapperStyled>
                <TextStyled>Выберите сложность:</TextStyled>
                <div>
                    <Select handleChange={handleChangeDifficulty} arr={difficultyArr}/>
                </div>
            </WrapperStyled>
            <Link to="/questions">
                <Button handlerClick={handlerGetQuestion} disabled={boolBtn}>Получить вопросы</Button>
            </Link>
        </WrapperSettingsQuizStyled>
    )
}
