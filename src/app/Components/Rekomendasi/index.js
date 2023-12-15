import Image from "next/image";
import Link from "next/link";

const Rekomendasi = ({ nama, gambar, deskripsi }) => {
  const urlImage = "http://127.0.0.1:8000/uploads";
  return (
    <div className="md:mx-5 mx-1 border-2 border-slate-300 rounded-lg">
      <Image src={`${urlImage}/${gambar}`} width={250} height={250} alt="Picture of the character" />
      <h3 className="font-bold md:text-xl sm:text-md text-sm p-3">{nama}</h3>
      <p className="md:text-md sm:text-sd text-sm p-3 truncate">{deskripsi}</p>
      <button className="px-8 py-2 border-2 ml-2 mb-2 rounded-md bg-indigo-500 text-white font-bold">
        <Link href={`Detail`}>Detail</Link>
      </button>
    </div>
  );
};

export default Rekomendasi;
