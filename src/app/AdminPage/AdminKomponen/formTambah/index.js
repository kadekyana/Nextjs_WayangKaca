"use client";
import { useState } from "react";

const FormTambah = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    stok: "",
    gambar: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      gambar: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="border rounded-lg bg-white m-5 px-10 py-5" onSubmit={handleSubmit}>
      <h1 className="py-3">TAMBAH PRODUCT</h1>

      <div className="py-3">
        <label htmlFor="nama">Nama</label>
        <div className="mt-3">
          <input type="text" id="nama" name="nama" placeholder="Nama Product" className="border rounded-md w-96 py-1.5 px-3" value={formData.nama} onChange={handleInputChange} />
        </div>
      </div>

      <div className="py-3">
        <label htmlFor="deskripsi">Deskripsi</label>
        <div className="mt-3">
          <textarea id="deskripsi" name="deskripsi" placeholder="Deskripsi Product" className="border rounded-md w-full py-1.5 px-3" value={formData.deskripsi} onChange={handleInputChange} />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="py-3">
          <label htmlFor="harga">Harga</label>
          <div className="relative mt-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <span>Rp.</span>
            </div>
            <input type="text" id="harga" name="harga" className="border rounded-md w-96 py-1.5 pl-10" value={formData.harga} onChange={handleInputChange} />
          </div>
        </div>

        <div className="py-3">
          <label htmlFor="stok">Stok</label>
          <div className="mt-3">
            <input type="text" id="stok" name="stok" placeholder="Jumlah Stok" className="border rounded-md w-96 py-1.5 px-3" value={formData.stok} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="py-3">
        <label htmlFor="gambar">Gambar</label>
        <div className="mt-3">
          <input type="file" id="gambar" name="gambar" placeholder="Nama Product" className="border rounded-md py-1.5 px-3 w-full" onChange={handleFileChange} required />
        </div>
      </div>

      <div className="my-5">
        <button type="submit" className="rounded bg-blue-500 p-3 text-white px-8">
          Tambah Product
        </button>
      </div>
    </form>
  );
};

export default FormTambah;
