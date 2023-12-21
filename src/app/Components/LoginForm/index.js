"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    console.log(username);
    console.log(password);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        if (userData.user.jenis == "admin") {
          route.push("/AdminPage");
        } else {
          route.push("/");
        }
        console.log("Login successful");
      } else {
        console.error("Login failed");
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
        <label htmlFor="username"></label>
        <input type="email" id="username" name="username" placeholder="Username" className="border-2 border-current w-72 p-2 rounded" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="password"></label>
        <input type="password" id="password" name="password" placeholder="Password" className="border-2 border-current w-72 p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="button" value="Login" onClick={handleLogin} className="w-full mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600" />
      <Link href="/Register" className="ml-auto mt-3 float-right text-sm">
        Daftar Sekarang
      </Link>
    </form>
  );
};

export default LoginForm;
