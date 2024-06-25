import Products from "@/components/Products";
import ProductsDetails from "@/components/ProductsDetails";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col max-w-7xl mx-auto">
      <h1 className="text-2xl  font-bold text-center my-8">Apple Store</h1>
      <Products />
      <ProductsDetails />
    </div>
  );
};

export default Page;
