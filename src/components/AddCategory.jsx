import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit = { handleSubmit }>
            <input type="Text" value={inputValue} onChange={handleChange}></input>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}