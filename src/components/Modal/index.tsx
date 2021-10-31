import React from 'react';
import ReactDOM from "react-dom";

import {ContentModalStyled, WrapperModalStyled} from "./style";

const modalRoot = document.getElementById('modal')

export const Modal: React.FC = ({children}) => {
    const portalElem = document.createElement('div')

    React.useEffect(() => {
        modalRoot?.appendChild(portalElem)
        return () => {
            modalRoot?.removeChild(portalElem)
        }
    }, [portalElem])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        //@ts-ignore
        modal.setModal(!modal.modal)
        e.stopPropagation()
    }

    return (
        ReactDOM.createPortal((
            <WrapperModalStyled onClick={(e) => handleClick(e)}>
                <ContentModalStyled>
                    {children}
                </ContentModalStyled>
            </WrapperModalStyled>
        ), portalElem)
    )
}
