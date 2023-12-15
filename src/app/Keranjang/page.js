import Link from "next/link"

const Keranjang = () =>{
    return(
        <div className="h-screen pt-20">
            <div className="border m-10">
                <h1 className="text-2xl px-6 py-3">Your Chart</h1>

                <table className="min-w-full divide-y">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left">Nama Product</th>
                            <th className="px-6 py-3 text-left">Harga</th>
                            <th className="px-6 py-3 text-left">Jumlah</th>
                            <th className="px-6 py-3 text-left">Sub Total</th>
                            <th className="px-6 py-3 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Nama Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Harga</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Jumlah</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Sub Total</th>
                            <th className="px-6 py-3 text-left"><Link href="" className="rounded bg-red-600 text-white p-2 ">Hapus</Link></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Keranjang