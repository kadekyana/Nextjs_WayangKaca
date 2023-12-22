"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { default: SideBar } = require("../../AdminKomponen/SideBar");

const EditProduct = ({ params: { id } }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    stok: "",
    gambar: null,
  });

  useEffect(() => {
    // Fetch data for the specified product id
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/detail-product/${id}`);
        const productData = await response.json();

        setFormData({
          nama: productData.product.nama,
          deskripsi: productData.product.deskripsi,
          harga: productData.product.harga,
          stok: productData.product.stok,
          gambar: productData.product.gambar,
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/admin/update/${id}`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Product updated successfully");
        router.push("/AdminPage/Product");
      } else {
        console.error("Error updating product");
      }
    } catch (error) {
      console.error("Error during edit:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="border w-screen">
          <form className="border rounded-lg bg-white m-5 px-10 py-5" onSubmit={handleFormSubmit}>
            <h1 className="py-3">EDIT PRODUCT</h1>

            <div className="py-3">
              <label htmlFor="nama">Nama</label>
              <div className="mt-3">
                <input type="text" id="nama" name="nama" placeholder="Nama Product" className="border rounded-md w-96  py-1.5 px-3" value={formData.nama} onChange={handleInputChange} />
              </div>
            </div>

            <div className="py-3">
              <label htmlFor="deskripsi">Deskripsi</label>
              <div className="mt-3">
                <textarea id="deskripsi" name="deskripsi" placeholder="Deskripsi Product" className="border rounded-md w-full  py-1.5 px-3" value={formData.deskripsi} onChange={handleInputChange} />
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="py-3">
                <label htmlFor="harga">Harga</label>
                <div className="relative mt-3">
                  <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                    <span>Rp.</span>
                  </div>
                  <input type="number" id="harga" name="harga" className="border rounded-md w-96  py-1.5 pl-10" value={formData.harga} onChange={handleInputChange} />
                </div>
              </div>
              <div className="py-3">
                <label htmlFor="stok">Stok</label>
                <div className="mt-3">
                  <input type="number" id="stok" name="stok" placeholder="Jumlah Stok" className="border rounded-md w-96  py-1.5 px-3" value={formData.stok} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div className="py-3">
              <label htmlFor="gambar">Gambar</label>
              <div className="mt-3">
                <input type="file" id="gambar" name="gambar" placeholder="Nama Product" className="border rounded-md  py-1.5 px-3 w-full" onChange={handleInputChange} />
              </div>
            </div>

            <div className="my-5">
              <button type="submit" className="rounded bg-blue-500 p-3 text-white px-8">
                Edit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
