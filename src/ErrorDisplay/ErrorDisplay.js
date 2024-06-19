import React from 'react';
import style from './ErrorDisplay.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function ErrorDisplay({text}) {
    let history = useHistory();
    
    return (
        <div className={style.container}>
            <div className={style.error_content}>
                {text}
            </div>
            <button onClick={()=>history.goBack()}>
                Назад
            </button>
        </div>
    );
}

export default ErrorDisplay;