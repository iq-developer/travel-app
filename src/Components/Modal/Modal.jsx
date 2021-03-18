import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.css'

const Modal = ({setModal}) => {
    return (
        <div className={s.modal}>
            {ReactDOM.createPortal(
                <div className={s.wrapp}>
                    <button onClick={() => setModal(false)}> назад</button>
                </div>,
                document.getElementById('modal')
            )}
        </div>
    );
};

export default Modal;