import React from "react";
import { WrapperButton } from "./style";

interface Props {
    disabled?: boolean,
    handlerClick: () => void
}

export const Button: React.FC<Props> = ({ disabled, children, handlerClick }) => (
    <WrapperButton>
        <button onClick={handlerClick} disabled={disabled}>{children}</button>
    </WrapperButton>
)

