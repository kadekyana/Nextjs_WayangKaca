import SideBar from "./AdminKomponen/SideBar/index"

const AdminPage = () =>{
    return (
        <>
            <div className="flex">
                <SideBar/>
                <div>
                    <div className="border rounded-lg bg-white m-10 h-auto w-64 p-6 ">
                        <h1 className="text-center">Welcome Admin</h1>
                    </div>
                    <div className="flex m-10 gap-x-5">
                        <div className="border rounded-lg bg-white h-auto w-64 p-6 text-center">
                            <h1>Total User</h1>
                            <h1 className="text-4xl pt-4">2</h1>
                        </div>
                        <div className="border rounded-lg bg-white h-auto w-64 p-6 text-center">
                            <h1>Total Product</h1>
                            <h1 className="text-4xl pt-4">5</h1>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default AdminPage