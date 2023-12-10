import Image from "next/image";
import Link from "next/link";
import Video from "../Video";

const Box = () => {
  return (
    <div className="w-full bg-black h-screen flex justify-around items-center">
      <div className="text-white self-center gap-2">
        <h1 className="text-2xl font-bold text-center">Wayang Kaca</h1>
        <p>Karya Seni Unik - Desa Naga Sepaha </p>
        <div>
          <button className="px-8 py-2 border-2 ml-2 mb-2 rounded-md bg-indigo-500 text-white font-bold">
            <Link href="/Product">Product</Link>
          </button>
          <button className="px-8 py-2 border-2 ml-2 mb-2 rounded-md bg-indigo-500 text-white font-bold">
            <Link href="/Product">History</Link>
          </button>
        </div>
      </div>
      <Video />
    </div>
  );
};

export default Box;
