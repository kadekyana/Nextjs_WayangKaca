import Link from "next/link"

const { default: SideBar } = require("../AdminKomponen/SideBar")


const UserPage = () =>{
    return(
        <div>
            <div className="flex">
                <SideBar/>
                <div className="border w-screen">
                    <div className="border rounded-lg  bg-white m-5 px-6 py-3">
                        <h1 className="text-3xl px-6 py-3">Data User</h1>
                        <table className="min-w-full divide-y divide-slate-900">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left">NO</th>
                                    <th className="px-6 py-3 text-left">NAMA</th>
                                    <th className="px-6 py-3 text-left">EMAIL</th>
                                    <th className="px-6 py-3 text-left">ROLE</th>
                                    <th className="px-6 py-3 text-left">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">1</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">dwigitayana</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">2@gmail.com</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">Admin</th>
                                    <th className="px-6 py-3 text-left"><Link href="" className="rounded bg-red-600 text-xs font-medium text-white py-2 px-5 mr-4 ">Hapus</Link></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage