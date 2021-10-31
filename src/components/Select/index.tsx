import React from 'react';
import {WrapperStyled} from "./style";

interface Props {
    arr: string[],
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Select: React.FC<Props> = ({arr, handleChange}) => {
    return (
        <WrapperStyled>
            {/*//@ts-ignore*/}
            <select onChange={handleChange}>
                {arr.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </WrapperStyled>
    );
};
