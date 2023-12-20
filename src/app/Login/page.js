import Image from "next/image";

import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex bg-white p-4 border rounded shadow-md ">
        <div className="p-4 ">
          <h1 className="text-center pb-5 text-2xl">Login</h1>
          <LoginForm />
        </div>
        <div className=" ">
          <Image src="/wayang1.jpeg" alt="" width={250} height={250} className="h-96 w-96 rounded p-2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
