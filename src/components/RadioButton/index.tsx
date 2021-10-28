import React from 'react';

import {RadioStyled} from "./style";

interface Props {
    value: number | string,
    name: string,
    handleChangeCountQuestion?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioButton: React.FC<Props> = ({name, handleChangeCountQuestion, value}) => (
    <>
        <RadioStyled>
            <label>
                <input
                    type="radio"
                    name={name}
                    onChange={handleChangeCountQuestion}
                    value={value}
                />
                <span>{value}</span>
            </label>
        </RadioStyled>
    </>
)
