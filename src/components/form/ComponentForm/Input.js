// =================================================
import React from 'react';
// =================================================

// Component
import './input.css';

function Input() {
    return (
        <React.Fragment>
            <div className="form__group">
                <h2 className="form__title">Имя</h2>
                <input className="form__input" type="text" />
            </div>
        </React.Fragment>
    );
}

export default Input;