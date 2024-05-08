import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                // <LoadingMessage loading={ isLoading } /> Forma con un componente
                // --------------------------------------------------------------
                // isLoading ? <h2>Cargando...</h2> : null Forma con un ternario
                // --------------------------------------------------------------
                isLoading && (<h2>Cargando...</h2>) // Forma con un operador lógico
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifGridItem 
                            key={image.id} 
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}