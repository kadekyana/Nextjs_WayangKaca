"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormEdit = () => {
  useEffect(() => {
    // Fetch data for the specified product id

    if (id) {
      fetchProductData();
    }
  }, [id]);
};

export default FormEdit;
