import { useState } from "react";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one', 'Drgon']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                /*  setCategories={setCategories}  */
                onNewCategory={(e) => onAddCategory(e)}


            />





            <ol>
                {categories.map((item) => (
                    <li key={item}>{item}</li>
                ))}

            </ol>
        </>
    );
};

export default GifExpertApp;