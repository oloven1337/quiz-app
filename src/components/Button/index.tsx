import React from "react";
import {WrapperButton} from "./style";

interface Props {
    boolBtn?: boolean,
    disabled?: boolean,
    handlerClick: () => void
}

export const Button: React.FC<Props> = ({boolBtn, children, handlerClick}) => (
    <WrapperButton>
        <button onClick={handlerClick} disabled={boolBtn}>{children}</button>
    </WrapperButton>
)

