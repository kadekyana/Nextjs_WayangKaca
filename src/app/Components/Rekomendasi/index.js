import Image from "next/image";
import Link from "next/link";

const Rekomendasi = ({ name, images, id, about }) => {
  return (
    <div className="md:mx-3 mx-1 border-2 border-slate-300 rounded-lg">
      <Image src={images} width={300} height={300} alt="Picture of the character" />
      <h3 className="font-bold md:text-xl sm:text-md text-sm p-3">{name}</h3>
      <p className="md:text-md sm:text-sd text-sm p-3 truncate">{about}</p>
      <button className="px-8 py-2 border-2 ml-2 mb-2 rounded-md bg-indigo-500 text-white font-bold">
        <Link href={`detail/${id}`}>Detail</Link>
      </button>
    </div>
  );
};

export default Rekomendasi;
