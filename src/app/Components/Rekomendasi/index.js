import Image from "next/image";

const Rekomendasi = ({ name, images }) => {
  return (
    <div className="md:mx-3 mx-1 border-2 border-slate-300 rounded-lg">
      <Image src={images} width={300} height={300} alt="Picture of the character" />
      <h3 className="font-bold md:text-xl sm:text-md text-sm p-3">{name}</h3>
    </div>
  );
};

export default Rekomendasi;
