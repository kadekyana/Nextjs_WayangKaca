"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormTambah from "../AdminKomponen/formTambah";

const { default: SideBar } = require("../AdminKomponen/SideBar");

const TambahProduct = () => {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    try {
      const form = new FormData();

      // Append each field to the form data
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await fetch("http://127.0.0.1:8000/api/admin/products/create", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        console.log("Product added successfully");
        router.push("/AdminProduct/Product");
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Error during product addition:", error);
    }
  };

  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="border w-screen">
          <FormTambah onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TambahProduct;
