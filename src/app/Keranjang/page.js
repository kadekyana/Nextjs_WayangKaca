import Link from "next/link"

const Keranjang = () =>{
    return(
        <div className="h-screen pt-20">
            <div className="m-10 px-6 py-3">
                <h1 className="text-3xl px-6 py-3">Your Chart</h1>

                <table className="min-w-full divide-y divide-slate-900">
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
                        <tr className="border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Nama Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Harga</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Jumlah</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Sub Total</th>
                            <th className="px-6 py-3 text-left"><Link href="" className="rounded bg-red-600 text-white p-2 ">Hapus</Link></th>
                        </tr>
                        
                    </tbody>
                </table>
                <form className="px-6 py-3">
                    <div className="mb-4 col-span-full">
                        <label htmlFor="username">Nama</label>
                        <div className="mt-2">
                            <input type="text" id="username" placeholder="" className="border rounded-md w-full rounded py-1.5 "/>
                        </div>
                    </div>
                    <div className="mb-4 col-span-full">
                        <label htmlFor="username">Total</label>
                        <div className="mt-2">
                            <input type="text" id="username" placeholder="" className="border rounded-md w-full rounded py-1.5 "/>
                        </div>
                    </div>
                    <div className="mb-4 col-span-full">
                        <label htmlFor="username">Alamat</label>
                        <div className="mt-2">
                            <input type="text" id="username" placeholder="" className="border rounded-md w-full rounded py-1.5 "/>
                        </div>
                    </div>
                </form>
                <div className="px-6 py-3">
                    <Link href="" className="rounded bg-blue-500 p-3 text-white">Checkout</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Keranjang