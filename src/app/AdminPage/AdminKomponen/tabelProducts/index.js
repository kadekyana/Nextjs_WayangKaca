"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TabelProducts = () => {
  const [data, setData] = useState({ products: [] });
  const router = useRouter();
  const urlImage = "http://127.0.0.1:8000/uploads";

  const handleEdit = (id) => {
    router.push(`/AdminPage/EditProduct/${id}`);
  };

  useEffect(() => {
    // Fetch data from the API and update the state
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/products`, { cache: "no-store" });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("product deleted successfully");
        router.refresh();
      } else {
        console.error("Error deleting product");
      }
    } catch (error) {
      console.error("Error during delete:", error);
    }
  };

  return (
    <tbody>
      {data.products.map((userData, index) => (
        <tr key={index + 1} className="border-b">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{index + 1}</th>
          <th className="px-6 py-3">
            <Image src={`${urlImage}/${userData.gambar}`} alt="" width={250} height={250} className="h-14 w-14 rounded" />
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{userData.nama}</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{userData.deskripsi}</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
            <span className="bg-blue-200 py-1 px-3 rounded">Rp.{userData.harga}</span>
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
            <span className="bg-blue-200 py-1 px-3 rounded">{userData.stok}</span>
          </th>
          <th className="px-6 py-3 text-center">
            <button onClick={() => handleEdit(userData.id)} className="rounded bg-blue-600 text-xs font-medium text-white py-2 px-5 mr-4">
              Edit
            </button>
          </th>
          <th className="px-6 py-3 text-center">
            <button onClick={() => handleDelete(userData.id)} className="rounded bg-red-600 text-xs font-medium text-white py-2 px-5 mr-4">
              Hapus
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TabelProducts;
