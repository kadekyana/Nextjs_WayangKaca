import Image from "next/image"

const Detail = () =>{
    return (
        <div className="h-screen flex justify-center items-center">
            <div className=" flex bg-white p-4 border rounded shadow-md">
                <div className="border m-7">
                    <Image src="/OIP.jpg" alt="" width={250} height={250} className="rounded object-cover h-full w-80"/>
                </div>
                <div className="p-2 mx-5 ">
                    <h1 className="text-center pb-5 text-2xl">Ramayana</h1>
                    <div className=" h-60 w-80">
                        <p className="text-justify text-xl p-1 border">deskripsi So I started to walk into the water. I won't lie to you boys, I was
                            terrified. But I pressed on, and as I made my way past the breakers
                            a strange calm came over me. I don't know if it was divine intervention
                            or the kinship of all 
                        </p>
                    </div>
                    <div className="border mt-4">
                        <h1>kuantitas</h1>
                    </div>
                    <button type="submit" className="w-full mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Masukkan ke Keranjang</button>
                </div>
            </div>
        </div>
    )
}

export default Detail