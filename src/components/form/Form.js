// =================================================
import React, {useState} from 'react';
// =================================================

// Component
//import './registration.css';
import Input from "./ComponentForm/Input";

function Form() {
    const [ fields, setField ] = useState([
        {
            id: 1,
            title: 'Имя',
            placeholder: 'Введите Ваше имя',
            //warning: 'Введено не корректное значение'
        },

        {
            id: 2,
            title: 'Email',
            placeholder: 'Введите ваш email',
            //warning: 'Введено не корректное значение'
        },

        {
            id: 3,
            title: 'Номер телефона',
            placeholder: 'Введите номер телефона',
            //warning: 'Введено не корректное значение'
        }
    ])

    return (
        <React.Fragment>
            <form className="form" action="#">
                { fields.map(({title, placeholder, warning, id}) =>
                    (<Input
                        key={id}
                        field={{title, placeholder, warning}}
                    />))
                }
            </form>
        </React.Fragment>
    );
}

export default Form;