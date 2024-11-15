import { useState } from "react";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one', 'Drgon']);

    const onAddCategory = (newCategories) => {

        if (categories.includes(newCategories)) return

        setCategories([newCategories, ...categories])
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                /* setCategories={setCategories} */
                categories={categories}
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