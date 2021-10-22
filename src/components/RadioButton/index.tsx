import React from 'react';

import {RadioStyled} from "./style";

interface Props {
    handleChangeCountQuestion: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: number
}

export const RadioButton: React.FC<Props> = ({handleChangeCountQuestion, value}) => (
    <>
        <RadioStyled> {value}
            <input name="countQuestions" onChange={handleChangeCountQuestion} value={value} type="radio"/>
        </RadioStyled>
    </>
)
