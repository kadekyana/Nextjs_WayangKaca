"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Bottombar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const route = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        // Add headers or credentials if needed
      });

      if (response.ok) {
        route.refresh();
        console.log("Logout successful");
        setIsLoggedIn(false);
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="flex flex-col md:flex-row md:justify-between p-5 font-bold w-full shadow-lg fixed bg-white z-10">
      <Link href="/" className="self-center md:self-start text-2xl">
        Wayang Kaca
      </Link>
      <div className="self-center">
        <Link href="/" className="px-2">
          Home
        </Link>
        <Link href="/Product" className="px-2">
          Product
        </Link>
        <Link href="/History" className="px-2">
          History
        </Link>
      </div>
      <div className="self-center">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout} className="px-2 cursor-pointer">
              Logout
            </button>
            <Link href="/Keranjang" className="px-2">
              Keranjang
            </Link>
          </>
        ) : (
          <Link href="/Login" className="px-2">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Bottombar;
