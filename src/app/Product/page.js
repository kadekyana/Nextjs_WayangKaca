import Image from "next/image";
import Rekomendasi from "../Components/Rekomendasi";

const Product = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters`);

  const anime = await response.json();

  return (
    <div className="p-10">
      <div className="font-bold p-5 text-2xl">Wayang Ramayana</div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="drop-shadow-lg">
              <Rekomendasi name={data.name} images={data.images.webp.image_url} id={data.mal_id} about={data.about} />
            </div>
          );
          // console.log(data.images.webp.image_url);
        })}
      </div>
    </div>
  );
};

export default Product;
