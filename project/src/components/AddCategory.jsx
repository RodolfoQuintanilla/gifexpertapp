import { useState } from "react";


const AddCategory = ({ setCategories, }) => {

    const [inputValue, setInputValue] = useState('push');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

       // setCategories(categories => [inputValue, ...categories])
console.log(categories);


    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

export default AddCategory;