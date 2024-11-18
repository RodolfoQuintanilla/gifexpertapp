
//import { getGifs } from "../helpers/getGifs";

import GifItem from "./GifItem";
import useFechGifs from "../hooks/useFechGifs";

const GifGrid = ({ category }) => {


    const { images, isLoading } = useFechGifs(category)

    console.log({ images });


    /*    
          const [images, setImages] = useState([]);
          
          const getImagenes = async () => {
              const imagenes = await getGifs(category);
              setImages(imagenes);
              
          }
      
          useEffect(() => {
              getImagenes()
          }, []);
       */
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }




            <div className="card-grid">
                {
                    images.map((img) => (

                        <GifItem
                            key={img.id}
                            {...img}
                        />

                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;