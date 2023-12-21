import Link from "next/link"
import Image from "next/image"

const { default: SideBar } = require("../AdminKomponen/SideBar")

const Product = () =>{
    return (
        <div>
            <div className="flex">
                <SideBar/>
                <div className="border w-screen">
                    <div className="border rounded-lg  bg-white m-5 px-6 py-3">
                        <div className="m-5">
                            <Link href="../AdminPage/TambahProduct" className="rounded bg-blue-600 text-white py-3 px-5 ">Tambah Product</Link>
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
                                    <th className="px-6 py-3 text-center">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">1</th>
                                    <th className="px-6 py-3">
                                        <Image src="/OIP.jpg" alt="" width={250} height={250} className="h-14 w-14 rounded"/>
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Arjuna Wiwaha</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Deskripsi</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                        <span className="bg-blue-200 py-1 px-3 rounded">Rp.500.000</span>
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                        <span className="bg-blue-200 py-1 px-3 rounded">10</span>
                                    </th>
                                    <th className="px-6 py-3 text-center">
                                        <Link href="../AdminPage/EditProduct" className="rounded bg-blue-600 text-xs font-medium text-white py-2 px-5 mr-4">Edit</Link>
                                        <Link href="" className="rounded bg-red-600 text-xs font-medium text-white py-2 px-4 ">Hapus</Link>
                                    </th>
                                    
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product