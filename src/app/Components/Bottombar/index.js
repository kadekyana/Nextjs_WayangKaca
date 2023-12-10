import Link from "next/link";

const Bottombar = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between p-5 font-bold">
      <Link href="/" className="self-center md:self-start text-2xl">
        Wayang Kaca
      </Link>
      <div className="self-center">
        <Link href="/" className="px-2">
          Home
        </Link>
        <Link href="Product" className="px-2">
          Product
        </Link>
        <Link href="/history" className="px-2">
          History
        </Link>
      </div>
      <div className="self-center">
        <Link href="/login" className="px-2">
          Login
        </Link>
        <Link href="/keranjang" className="px-2">
          Keranjang
        </Link>
      </div>
    </header>
  );
};

export default Bottombar;
