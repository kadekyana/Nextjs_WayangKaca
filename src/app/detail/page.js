import Image from "next/image"

const Detail = () =>{
    return (
        <div className="container  flex border mx-auto items-center justify-center ">
            <div className="p-4 m-20 flex gap-4 grid-column-2 rounded border ">
                <div className="borders">
                    <Image 
                        src="/OIP.jpg" 
                        alt=".." 
                        width={250} height={250} 
                        className=" rounded w-72 h-72"/>
                </div>
                
                <div className="border w-96 ">
                    <h1> Judul</h1>
                    <p>Deskripsi</p>
                </div>
            </div>
        </div>
    )
}

export default Detail