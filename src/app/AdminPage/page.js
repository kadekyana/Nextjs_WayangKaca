import SideBar from "./AdminKomponen/SideBar/index";
const AdminPage = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/index`, { cache: "no-store" });
  const data = await response.json();
  return (
    <>
      <div className="flex">
        <SideBar />
        <div>
          <div className="border rounded-lg bg-white m-10 h-auto w-64 p-6 ">
            <h1 className="text-center">Welcome Admin</h1>
          </div>
          <div className="flex m-10 gap-x-5">
            <div className="border rounded-lg bg-white h-auto w-64 p-6 text-center">
              <h1>Total User</h1>
              <h1 className="text-4xl pt-4">{data.usersCount}</h1>
            </div>
            <div className="border rounded-lg bg-white h-auto w-64 p-6 text-center">
              <h1>Total Product</h1>
              <h1 className="text-4xl pt-4">{data.productsCount}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
