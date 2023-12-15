import Image from "next/image"
import Link from "next/link"
import Login from "../Login/page"

const Register = () =>{
    return (
        <div className="h-screen flex justify-center items-center">
            <div className=" flex bg-white p-4 border rounded shadow-md ">
                <div className="">
                    <Image src="/OIP.jpg" alt="" width={250} height={250} className="rounded object-cover h-96 w-96 p-2"/>
                </div>
                <div className="p-2 ">
                    <h1 className="text-center pb-5 text-2xl">Register</h1>
                    <form className="py-2 px-3 ">
                        <div className="mb-4 ">
                            <label htmlFor="username"></label>
                            <input type="text" id="username" placeholder="Email" className="border-2 border-current w-72 p-2 rounded"/>
                        </div>
                        <div className="mb-4 ">
                            <label htmlFor="password"></label>
                            <input type="text" id="password" placeholder="Password" className="border-2 border-current w-72 p-2 rounded"/>
                        </div>
                        <div className="mb-4 ">
                            <label htmlFor="password"></label>
                            <input type="text" id="password" placeholder="Masukkan Password Lagi" className="border-2 border-current w-72 p-2 rounded"/>
                        </div>
                        <button type="submit"  className="w-full mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"><Link href="/Login">Register</Link></button>
                        <Link href="/Login" className="ml-auto mt-3 float-right text-sm">Kembali ke Login</Link> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register