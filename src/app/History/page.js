import Image from "next/image"

const History = () =>{
    return(
        <div className="h-screen">
            <div>
                <video controls width="100%" height="400" muted autoPlay loop className="rounded-lg">
                <source src="source/landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div className="m-10 px-28 border text-justify ">
                <h1 className="text-4xl text-center my-6 mb-10">Sejarah Lukisan Wayang Kaca</h1>
                <p className="text-xl mb-3">Sejarah lukisan Wayang Kaca bermula dari Maistro Jero Dalang Diah, dimana sebelum beliau menekuni lukisan Wayang kaca, beliau merupakan dalang wayang kulit pada tahun 1927. Kelahiran Jero Dalang Diah adalah 1909. Pada tahun 1927 beliau yang merupakan Dalang Wayang kulit menerima pesanan dari Wayan Nitia yang memesan Wayang Kaca. Pada awalnya Jero Dalang sempat kaget dengan lukisan kaca berobjek dengan busana kimono. Lalu Jero Dalang mengamati secara detail lalu beliau mengelupas bagian pertama, lalu menemukan bahwa ada lapisan chatnya setelah itu terdapat coretan hitam di bawahnya. Setelah itu beliau mencoba dan menyanggupi pesanan itu. Beliau sebagai pembuat wayang kulit merasa tertantang untuk membuat lukisan itu.</p>
                <p className="text-xl mb-3">Pada awal pertama Jero Dalang Diah menggunakan jelajar/mangsia, namun percobaan beliau gagal. Suatu hari beliau pergi ke pasar dan menemukan bahwa tinta bak dapat di pakai untuk membuat lukisannya, lalu beliau mencoba dan berhasil. Langkah selanjutnya pada pewarnaannya, beliau mencoba mewarnainya menggunakan cat air namun gagal. lalu beliau mencoba lagi dan berhasil. lalu pada langkah terakhir beliau menggunakan latar polos dengan warna biru langit. Pada tahun 1970 datang seorang petani jeruk dari Bondalem den petani kopi dari Gitgit mereka memesan lukisan Wayang Kaca dengan latarbelakang pemandangan Akhirnya beliau mendapat pesanan dari puluhan hingga ratusan lembar.</p>
                <p className="text-xl mb-3">Pada tahun 1971 datang seorang peneliti dari mancanegara bernama nyonya Esler, beliau meminta lukisan dengan tema pemandangan. Pada tahun 1973 terdapat penelitian dari intelektual muda dari kampus Undiksha, serta memberikan sebuah saran agar tidak hanya seting pemandangan saja dan akhirnya laris. Pada tahun 2000 Pak Ardiman dari Undiksha menjadi kuratornya. Pak Ardiman mengajak seniman Wayang Kaca pameran di berbagai tempat, mulai dari lovina lalu ke Bentara Budaya Bali yang terletak di Baypas jl.Ida Bagus Mantra.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mx-10 justify-stretch md:grid-cols-4 px-5 ">
                    <Image src="/OIP.jpg" alt="" width={250} height={250} className=" rounded h-64 w-64"/> 
                    <Image src="/OIP.jpg" alt="" width={250} height={250} className=" rounded h-64 w-64"/>   
                    <Image src="/OIP.jpg" alt="" width={250} height={250} className=" rounded h-64 w-64"/>   
                    <Image src="/OIP.jpg" alt="" width={250} height={250} className=" rounded h-64 w-64"/>    
            </div>
        </div>
    )
}


export default History