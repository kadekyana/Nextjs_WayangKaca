import Link from "next/link"
import { BsCardChecklist } from "react-icons/bs";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { BsMinecartLoaded } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

const SideBar = () =>{
    return (
        <aside className="h-screen">
            <div className="h-full bg-white w-60 border">
                <div className="flex justify-center">
                    <h1 className="py-10 border-b text-2xl">Dashboard Admin</h1>
                </div>
                <div className="boeder m-5 flex justify-center">
                    <ul className="grid gap-y-10">
                        <li>
                            <Link href="../AdminPage" className="flex items-center gap-x-3">
                                <BsCardChecklist/>        
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="../AdminPage/UserPage" className="flex items-center gap-x-3">
                                <BsFileEarmarkPerson />
                                <span>User</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="../AdminPage/Product" className="flex items-center gap-x-3">
                                <BsMinecartLoaded />
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="flex items-center gap-x-3">
                                <BsArrowLeftShort />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>

    )
}

export default SideBar