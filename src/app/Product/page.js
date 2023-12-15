import Image from "next/image";
import Rekomendasi from "../Components/Rekomendasi";

const Product = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/products`);

  const products = await response.json();

  return (
    <div className="p-10 pt-20">
      <div className="font-bold p-5 text-2xl">Wayang Ramayana</div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {products.products.map((data) => {
          return (
            <div key={data.id} className="drop-shadow-lg">
              <Rekomendasi nama={data.nama} gambar={data.gambar} id={data.id} deskripsi={data.deskripsi} />
            </div>
          );
          // console.log(data.images.webp.image_url);
        })}
      </div>
    </div>
  );
};

export default Product;
