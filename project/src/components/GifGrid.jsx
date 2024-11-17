import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    console.log(images);


    const getImagenes = async () => {
        const imagenes = await getGifs(category);
        setImages(imagenes);
    }

    useEffect(() => {
        getImagenes()
    }, []);

    return (
        <>
            <h3>{category}</h3>


            <ol>
                {
                    images.map(({ id, title, url }) => (
                        <li key={id}>{title} </li>
                       
                    ))
                }
            </ol>
        </>
    );
};

export default GifGrid;