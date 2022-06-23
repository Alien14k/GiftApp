import "../index.css";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { SkeletonLoading } from "../SkeletonLoading";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
    <div className="border-b-2">
      <div className="text-3xl font-semibold px-2 mt-2">{category}</div>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        
        <div className="flex flex-wrap justify-between px-2 mb-4">
          { images.length === 0 ? 'No se encontró información' : 
          images.map((image) => (
            // <GifItem key={ image.id } title={ image.title } url={ image.url }  />
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};
