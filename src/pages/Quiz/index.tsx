import React from 'react';
import {Link} from "react-router-dom";
import {InputLabel, MenuItem, Button} from "@mui/material";
import {useDispatch} from "react-redux";

import {clearQuestions, fetchQuestions} from "../../__data__/questionsSlice";
import {clearAnswers} from "../../__data__/answersSlice";
import {SelectChangeEvent} from '@mui/material/Select';

import {
    FormControlStyled,
    RadioStyled,
    SelectStyled,
    TextStyled,
    WrapperSettingsQuizStyled,
    WrapperStyled
} from "./style";


export const Quiz: React.FC = () => {
    const [selectedValue, setSelectedValue] = React.useState(10);
    const [categories, setCategories] = React.useState('Sports')
    const [difficulty, setDifficulty] = React.useState('Easy')

    const dispatch = useDispatch()

    const handleChangeSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(Number(e.target.value))
    }

    const handleChangeCategories = (e: SelectChangeEvent<unknown>) => {
        setCategories(e.target.value as string)
    }

    const handleChangeDifficulty = (e: SelectChangeEvent<unknown>) => {
        setDifficulty(e.target.value as string)
    }

    const categoryValues = {
        Sports: 21,
        Art: 25,
        History: 23,
        Animals: 27,
    }

    const handlerGetQuestion = () => {
        dispatch(clearQuestions())
        dispatch(clearAnswers())
        if (selectedValue && categories && difficulty) {
            const categoryName = Object.keys(categoryValues).indexOf(categories)
            const categoryId = Object.values(categoryValues)[categoryName]
            console.log(selectedValue, categoryId)
            dispatch(fetchQuestions({
                numberQuestion: selectedValue,
                category: categoryId,
                difficulty
            }))
        }
    }

    return (
        <>
            <WrapperSettingsQuizStyled>
                <WrapperStyled>
                    <TextStyled>Количество вопросов:</TextStyled>
                    <div>
                        <span>10</span>
                        <RadioStyled
                            checked={selectedValue === 10}
                            onChange={handleChangeSelected}
                            name="countQuestion"
                            size="small"
                            value={10}
                        />
                        <span>20</span>
                        <RadioStyled
                            checked={selectedValue === 20}
                            onChange={handleChangeSelected}
                            name="countQuestion"
                            size="small"
                            value={20}
                        />
                        <span>30</span>
                        <RadioStyled
                            checked={selectedValue === 30}
                            onChange={handleChangeSelected}
                            name="countQuestion"
                            size="small"
                            value={30}
                        />
                    </div>
                </WrapperStyled>
                <WrapperStyled>
                    <TextStyled>Выберите категорию:</TextStyled>
                    <div>
                        <FormControlStyled>
                            <InputLabel id="demo-controlled-open-select-label">Категория</InputLabel>
                            <SelectStyled
                                onChange={handleChangeCategories}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categories}
                                label="Категория"
                            >
                                <MenuItem value="Sports">Sports</MenuItem>
                                <MenuItem value="Art">Art</MenuItem>
                                <MenuItem value="History">History</MenuItem>
                                <MenuItem value="Animals">Animals</MenuItem>
                            </SelectStyled>
                        </FormControlStyled>
                    </div>
                </WrapperStyled>
                <WrapperStyled>
                    <TextStyled>Выберите сложность:</TextStyled>
                    <div>
                        <FormControlStyled>
                            <InputLabel id="demo-controlled-open-select-label">Сложность</InputLabel>
                            <SelectStyled
                                onChange={handleChangeDifficulty}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={difficulty}
                                label="Сложность"
                            >
                                <MenuItem value="Easy">Easy</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Hard">Hard</MenuItem>
                            </SelectStyled>
                        </FormControlStyled>
                    </div>
                </WrapperStyled>
                <div style={{textAlign: 'center'}}>
                    <Link style={{textDecoration: 'none'}} to="/questions">
                        <Button variant="contained" color="success" onClick={handlerGetQuestion}>
                            Получить вопросы
                        </Button>
                    </Link>
                </div>
            </WrapperSettingsQuizStyled>
        </>
    )
}
