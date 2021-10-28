import React from 'react';
import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root')

export const Modal = () => {
    const r = document.createElement('div')

    React.useEffect(() => {
        //@ts-ignore
        modalRoot.appendChild(r)
        return () => {
            //@ts-ignore
            modalRoot.removeChild(r)
        }
    }, [])

    return (
        ReactDOM.createPortal(<h1>Portal</h1>, r)
    )
}
