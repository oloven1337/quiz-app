import React from 'react';
import {Link} from 'react-router-dom'

import {WrapperHeaderStyled} from './style'

export const Header: React.FC = () => (
    <WrapperHeaderStyled>
        <Link to="/">
            <li>Играть</li>
        </Link>
        <Link to="/records">
            <li>Мои рекорды</li>
        </Link>
    </WrapperHeaderStyled>
)
