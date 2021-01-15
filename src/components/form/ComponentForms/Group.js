// =================================================
import React from 'react';
// =================================================

// Component
import './group.css';

function Group() {
    return (
        <React.Fragment>
            <h2 className="registration__title" >Регистрация</h2>
            <div className="registration__group">
                <span className="registration__information">Уже есть аккаунт?</span>
                <button className="button registration__btn" type="button">Войти</button>
            </div>
        </React.Fragment>
    );
}

export default Group;