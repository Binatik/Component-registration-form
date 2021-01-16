// =================================================
import React from 'react';
// =================================================

// Component
import './input.css';

function Input({index, field}) {
    const { title, placeholder, warning } = field;

    function gt(node, index) {
        for (let i = 0; i <= index; i++) {
            node = node.parentNode;
        }
        return(node);
    }

    function verifyValidity(event){
        const target = event.target;
        const validation = gt(target, 1).children[2];

        const reg = {
            name: /^[a-zа-яё-]+$/i,
            email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            tel: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
        }

        function manageClass() {
            validation.classList.remove('form__input_waiting');
            validation.classList.add('form__input_ok');
            validation.classList.remove('form__input_error');
        }


        if (reg.name.test(target.value) && index === 0) {
            manageClass()
        }
        else if (reg.email.test(target.value) && index === 1) {
            manageClass()
        }
        else if (reg.tel.test(target.value) && index === 2) {
            manageClass()
        }
        else {
            validation.classList.remove('form__input_waiting');
            validation.classList.add('form__input_error');
            validation.classList.remove('form__input_ok');
        }

    }
    return (
        <React.Fragment>
            <div className="form__group">
                <h2 className="form__title">{title}</h2>
                <div className="form__control">
                    <input
                        onChange={verifyValidity}
                        className="form__input"
                        type="text"
                        placeholder={placeholder}
                    />
                </div>
                <span className="form__input_validation"> {warning} </span>
            </div>
        </React.Fragment>
    );
}

export default Input;