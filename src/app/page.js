import Rekomendasi from "@/app/Components/Rekomendasi";
import { data } from "autoprefixer";
import Product from "./Product/page";
import Box from "./Components/Box";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=4`);

  const anime = await response.json();

  return (
    <div>
      <Box />
      <div className="flex justify-center  p-5 font-bold text-2xl ">Product Rekomendasi</div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="drop-shadow-lg">
              <Rekomendasi name={data.name} images={data.images.webp.image_url} />
            </div>
          );
          // console.log(data.images.webp.image_url);
        })}
      </div>
    </div>
  );
};

export default Home;
