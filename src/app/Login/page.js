import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex bg-white p-4 border rounded shadow-md ">
        <div className="p-4 ">
          <h1 className="text-center pb-5 text-2xl">Login</h1>
          <form className="py-7 px-3 ">
            <div className="mb-4 ">
              <label htmlFor="username"></label>
              <input type="text" id="username" placeholder="Username" className="border-2 border-current w-72 p-2 rounded" />
            </div>
            <div className="mb-4 ">
              <label htmlFor="password"></label>
              <input type="text" id="password" placeholder="Password" className="border-2 border-current w-72 p-2 rounded" />
            </div>
            <button type="submit" className="w-full mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              <Link href="/">Login</Link>
            </button>
            <Link href="/Register" className="ml-auto mt-3 float-right text-sm">
              Daftar Sekarang
            </Link>
          </form>
        </div>
        <div className=" ">
          <Image src="/wayang1.jpeg" alt="" width={250} height={250} className="h-96 w-96 rounded p-2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
