import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        const inputVal = inputValue.trim();
        event.preventDefault();
        if (inputVal.length <= 1) return;
        onNewCategory(inputVal);
        setInputValue('');
    }
    return (
        <form onSubmit={ (event) => onSubmit(event) } aria-label="form" >
            <input 
                type="text" 
                placeholder="Buscar Gifts" 
                value={ inputValue }
                onChange={ (event) => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.prototype = {
    onNewCategory: PropTypes.func.isRequired
}