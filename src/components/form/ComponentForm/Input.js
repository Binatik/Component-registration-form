// =================================================
import React from 'react';
// =================================================

// Component
import './input.css';

function Input({field}) {
    const { title, placeholder, warning } = field;
    return (
        <React.Fragment>
            <div className="form__group">
                <h2 className="form__title">{title}</h2>
                <div className="form__control">
                    <input className="form__input" type="text" placeholder={placeholder} />
                </div>
                <span className="form__input_error">{warning}</span>
            </div>
        </React.Fragment>
    );
}

export default Input;