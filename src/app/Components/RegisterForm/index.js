"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const route = useRouter();

  const handleRegister = async () => {
    console.log(nama);
    console.log(username);
    console.log(password);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nama, email: username, password }),
      });

      if (response.ok) {
        console.log("Register successful");
        route.push("/Login");
      } else {
        console.error("Register failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    console.log("Client-side code executed!");
  }, []);

  return (
    <form className="py-7 px-3 ">
      <div className="mb-4">
        <label htmlFor="nama"></label>
        <input type="text" id="nama" name="nama" placeholder="Masukkan Nama" className="border-2 border-current w-72 p-2 rounded" onChange={(e) => setNama(e.target.value)} />
      </div>
      <div className="mb-4 ">
        <label htmlFor="username"></label>
        <input type="email" id="username" name="username" placeholder="Email" className="border-2 border-current w-72 p-2 rounded" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="password"></label>
        <input type="password" id="password" name="password" placeholder="Password" className="border-2 border-current w-72 p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="button" value="Register" onClick={handleRegister} className="w-full mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600" />
      <Link href="/Login" className="ml-auto mt-3 float-right text-sm">
        Login Sekarang
      </Link>
    </form>
  );
};

export default RegisterForm;
