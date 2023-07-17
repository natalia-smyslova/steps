import { useState } from "react"
import PropTypes from 'prop-types';

function Form(props) {

    const [distanceInput, setDistanceInput] = useState('');

    const [dateInput, setDateInput] = useState('');

    const handleChange = e => {
        setDistanceInput(e.target.value);
    };

    const handleDateChange = e => {

        setDateInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        let newDate = dateInput.split("-").reverse().join(".");

        let inputDate = Date.parse(dateInput);
        let dayNow = new Date();
        dayNow = Date.parse(dayNow);


        if (dayNow < inputDate) {
            alert('Неверная дата')
        }
        else {

            props.onSubmit({
                id: newDate,
                number: distanceInput,
                date: newDate
            });

        }

        setDistanceInput('');
        setDateInput('');
    };


    return (
        <form className="steps-form" onSubmit={handleSubmit}>
            <div className="form__item">
                <label htmlFor="date" className="form__label"><span>Дата (ДД.ММ.ГГ)</span></label>
                <input type='date' value={dateInput} min='1899-01-01' name='date' className="date" onChange={handleDateChange} required></input>
            </div>
            <div className="form__item">
                <label htmlFor="distance" className="form__label">Пройдено км</label>
                <input type='number' value={distanceInput} name='kilometers' className="distance" onChange={handleChange} required></input>
            </div>
            <div className="form__item">
                <button className="form-button">OK</button>
            </div>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.any
  }

export default Form