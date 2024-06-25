import { data } from "@/data/data";
import React from "react";

function Products() {
  return (
    <div className="grid grid-cols-responsive gap-y-14  gap-x-8 w-full justify-center">
      {data.map((item) => (
        <div key={item.alt} className=" flex flex-col gap-4 items-center">
          <img
            src={item.src}
            alt={item.alt}
            className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
          />
          <p className="text-center text-paragraph mt-4 font-bold">
            {item.paragraph}
          </p>
          <button className=" text-paragraph  w-button-width border-black border-2 hover:bg-blue-800 font-semibold text-white bg-blue-600 rounded-2xl">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
