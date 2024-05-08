import { useState } from "react"

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
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Buscar Gifts" 
                value={ inputValue }
                onChange={ (event) => onInputChange(event)}
            />
        </form>
    )
}