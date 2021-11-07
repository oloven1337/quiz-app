import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from "@mui/material";

import {Wrapper, WrapperHeaderStyled} from './style'

interface Props {
    toggleTheme: () => {}
}

export const Header: React.FC<Props> = ({toggleTheme}) => (
    <Wrapper>
        <WrapperHeaderStyled>
            <Link to="/">
                <li>Играть</li>
            </Link>
            <Link to="/records">
                <li>Мои рекорды</li>
            </Link>
        </WrapperHeaderStyled>
        <Button variant="contained" color="info" onClick={toggleTheme}>Поменять тему</Button>

    </Wrapper>
)
