import Link from "next/link"

const { default: SideBar } = require("../AdminKomponen/SideBar")

const EditProduct = () =>{
    return (
        <div>
            <div className="flex">
                <SideBar/>
                <div className="border w-screen">
                    <form className="border rounded-lg  bg-white m-5 px-10 py-5">
                        <h1 className=" py-3">EDIT PRODUCT</h1>
                        <div className="py-3">
                            <label htmlFor="nama">Nama</label>
                            <div className="mt-3">
                                <input type="text" id="nama" placeholder="Nama Product" className="border rounded-md w-96 rounded py-1.5 px-3"></input>
                            </div>
                        </div>
                        <div className="py-3">
                            <label htmlFor="deskripsi">Deskripsi</label>
                            <div className="mt-3">
                                <textarea id="deskripsi" placeholder="Deskripsi Product" className="border rounded-md w-full rounded py-1.5 px-3"></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="py-3">
                                <label htmlFor="harga">Harga</label>
                                <div className="relative mt-3">
                                    <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                                        <span>Rp.</span>
                                    </div>
                                    <input type="text" id="nama" className="border rounded-md w-96 rounded py-1.5 pl-10"></input>
                                </div>
                            </div>
                            <div className="py-3">
                                <label htmlFor="nama">Stok</label>
                                <div className="mt-3">
                                    <input type="text" id="nama" placeholder="Jumlah Stok" className="border rounded-md w-96 rounded py-1.5 px-3"></input>
                                </div>
                            </div>
                        </div>

                        <div className="py-3">
                            <label htmlFor="nama">Gambar</label>
                            <div className="mt-3">
                                <input type="file" id="gambar" placeholder="Nama Product" className="border rounded-md rounded py-1.5 px-3 w-full" required></input>
                            </div>
                        </div>
                        <div className="my-5">
                            <Link href="" className="rounded bg-blue-500 p-3 text-white px-8">Edit Product</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct