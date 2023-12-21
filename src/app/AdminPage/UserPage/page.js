import Link from "next/link";
import TabelUsers from "../AdminKomponen/tabelUsers";

const { default: SideBar } = require("../AdminKomponen/SideBar");
// const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`, { cache: "no-store" });
// const data = await response.json();
// console.log(data);
const UserPage = () => {
  return (
    <div>
      <div className="flex">
        <SideBar />
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
              {/* {data.users.map((data) => {
                  return (
                    <tr key={data.id} className="border-b">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">1</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{data.name}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{data.email}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{data.jenis}</th>
                      <th className="px-6 py-3 text-left">
                        <Link href="" className="rounded bg-red-600 text-xs font-medium text-white py-2 px-5 mr-4 ">
                          Hapus
                        </Link>
                      </th>
                    </tr>
                  );
                })} */}
              <TabelUsers />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
