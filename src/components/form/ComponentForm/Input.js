// =================================================
import React from 'react';
// =================================================

// Component
//import './registration.css';

function Input() {
    return (
        <React.Fragment>
            <div className="form__group">
                <h2 className="form__title">Имя</h2>
                <input type="text" value="Очистить" />
            </div>
        </React.Fragment>
    );
}

export default Input;