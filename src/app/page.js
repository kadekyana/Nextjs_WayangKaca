import Rekomendasi from "@/app/Components/Rekomendasi";
import { data } from "autoprefixer";
import Product from "./Product/page";
import Box from "./Components/Box";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/products`);
  const products = await response.json();
  console.log(products.products);
  return (
    <div>
      <Box />
      <div className="flex justify-center  p-5 font-bold text-2xl ">Product Rekomendasi</div>
      <div className="grid md:grid-cols-4 grid-cols-2 px-20 mb-14">
        {products.products.map((data) => {
          console.log(data.nama);
          return (
            <div key={data.id} className="drop-shadow-lg">
              <Rekomendasi nama={data.nama} gambar={data.gambar} deskripsi={data.deskripsi} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
