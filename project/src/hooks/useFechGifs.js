import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFechGifs(category) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImagenes = async () => {
        const imagenes = await getGifs(category);
        setImages(imagenes);
        setIsLoading(false)
    }

    useEffect(() => {
        getImagenes()
    }, []);
    return {
        images,
        isLoading
    }
}
