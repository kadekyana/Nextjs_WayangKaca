import Link from "next/link";

const Bottombar = () => {
  return (
    <header className="">
      <div className="flex justify-between p-5 font-bold">
        <Link href="/">Wayang Kaca</Link>
        <div>
          <Link href="" className="px-2">
            Home
          </Link>
          <Link href="" className="px-2">
            Product
          </Link>
          <Link href="" className="px-2">
            History
          </Link>
        </div>
        <div>
          <Link href="/" className="px-2">
            Login
          </Link>
          <Link href="/" className="px-2">
            Keranjang
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Bottombar;
