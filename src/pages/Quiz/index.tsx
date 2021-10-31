import React from 'react';
import {Link} from "react-router-dom";
import {InputLabel, MenuItem, Button} from "@mui/material";

import {useDispatch} from "react-redux";
import {clearQuestions, getQuestions} from "../../__data__/actions/questions";

import {
    FormControlStyled,
    RadioStyled,
    SelectStyled,
    TextStyled,
    WrapperSettingsQuizStyled,
    WrapperStyled
} from "./style";
import {clearAnswers} from "../../__data__/actions/answers";

export const Quiz: React.FC = () => {
    const [selectedValue, setSelectedValue] = React.useState(10);
    const [categories, setCategories] = React.useState<string>('Sports')
    const [difficulty, setDifficulty] = React.useState<string>('Easy')

    const dispatch = useDispatch()

    const handleChangeSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(+e.target.value)
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

    const handlerGetQuestion = () => {
        dispatch(clearQuestions())
        dispatch(clearAnswers())
        if (selectedValue && categories && difficulty) {
            const categoryName = Object.keys(categoryValues).indexOf(categories)
            const categoryId = Object.values(categoryValues)[categoryName]
            dispatch(getQuestions(selectedValue, categoryId, difficulty))
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
                            sx={{color: 'white'}}
                        />
                        <span>20</span>
                        <RadioStyled
                            checked={selectedValue === 20}
                            onChange={handleChangeSelected}
                            name="countQuestion"
                            size="small"
                            value={20}
                            sx={{color: 'white'}}
                        />
                        <span>30</span>
                        <RadioStyled
                            checked={selectedValue === 30}
                            onChange={handleChangeSelected}
                            name="countQuestion"
                            size="small"
                            value={30}
                            sx={{color: 'white'}}
                        />
                    </div>
                </WrapperStyled>
                <WrapperStyled>
                    <TextStyled>Выберите категорию:</TextStyled>
                    <div>
                        <FormControlStyled>
                            <InputLabel id="demo-controlled-open-select-label">Категория</InputLabel>
                            <SelectStyled
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categories}
                                label="Категория"
                                //@ts-ignore
                                onChange={handleChangeCategories}
                                sx={{
                                    color: '#1976d2', "&:before": {
                                        borderColor: "red"
                                    }
                                }}
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
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={difficulty}
                                label="Сложность"
                                //@ts-ignore
                                onChange={handleChangeDifficulty}
                                sx={{color: '#1976d2'}}
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
