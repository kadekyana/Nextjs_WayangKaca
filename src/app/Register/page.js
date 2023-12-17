import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex bg-white p-4 border rounded shadow-md ">
        <div className="pt-5">
          <Image src="/wayang2.jpeg" alt="" width={250} height={250} className="h-96 w-96 rounded p-2" />
        </div>
        <div className="p-2 ">
          <h1 className="text-center pb-5 text-2xl">Register</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
