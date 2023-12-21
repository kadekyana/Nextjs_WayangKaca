import Link from "next/link";
import Image from "next/image";
import TabelProducts from "../AdminKomponen/tabelProducts";

const { default: SideBar } = require("../AdminKomponen/SideBar");

const Product = () => {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="border w-screen">
          <div className="border rounded-lg  bg-white m-5 px-6 py-3">
            <div className="m-5">
              <Link href="../AdminPage/TambahProduct" className="rounded bg-blue-600 text-white py-3 px-5 ">
                Tambah Product
              </Link>
            </div>
            <table className="min-w-full divide-y divide-slate-900">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left">NO</th>
                  <th className="px-6 py-3 text-left">GAMBAR</th>
                  <th className="px-6 py-3 text-left">NAMA</th>
                  <th className="px-6 py-3 text-left">DESKRIPSI</th>
                  <th className="px-6 py-3 text-left">HARGA</th>
                  <th className="px-6 py-3 text-left">STOK</th>
                  <th className="px-6 py-3 text-center">EDIT</th>
                  <th className="px-6 py-3 text-center">HAPUS</th>
                </tr>
              </thead>
              <TabelProducts />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
