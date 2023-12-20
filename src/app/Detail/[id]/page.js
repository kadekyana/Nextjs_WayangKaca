import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/detail-product/${id}`);
  const detail = await response.json();
  const urlImage = "http://127.0.0.1:8000/uploads";

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex bg-white p-4 border rounded shadow-md">
        <div className="flex justify-center items-center m-7">
          <Image src={`${urlImage}/${detail.product.gambar}`} alt="" width={250} height={250} className="rounded" />
        </div>
        <div className="p-2 mx-5 ">
          <h1 className="text-center pb-5 text-2xl">{detail.product.nama}</h1>
          <div className=" h-60 w-80">
            <p className="text-justify text-xl p-1 border">{detail.product.deskripsi}</p>
          </div>
          <div className="border mt-4">
            <h1>kuantitas</h1>
          </div>
          <button type="submit" className="w-full mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Masukkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
