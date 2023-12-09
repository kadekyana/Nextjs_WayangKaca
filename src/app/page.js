import Rekomendasi from "@/app/Components/Rekomendasi";
import { data } from "autoprefixer";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters`);

  const anime = await response.json();

  return (
    <div>
      <h1>Product Popular</h1>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4">
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
