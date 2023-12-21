"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TabelUsers = () => {
  const [data, setData] = useState({ users: [] });
  const router = useRouter();

  useEffect(() => {
    // Fetch data from the API and update the state
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`, { cache: "no-store" });
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("User deleted successfully");
        router.refresh();
      } else {
        console.error("Error deleting user");
      }
    } catch (error) {
      console.error("Error during delete:", error);
    }
  };

  return (
    <tbody>
      {data.users.map((userData, index) => (
        <tr className="border-b" key={userData.id}>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">{index + 1}</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">{userData.name}</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">{userData.email}</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">{userData.jenis}</th>
          <th className="px-6 py-3 text-left">
            <button onClick={() => handleDelete(userData.id)} className="rounded bg-red-600 text-xs font-medium text-white py-2 px-5 mr-4">
              Hapus
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TabelUsers;
