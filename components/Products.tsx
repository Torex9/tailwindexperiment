import React from "react";

function Products() {
  return (
    <div className="grid grid-cols-responsive gap-y-14  gap-x-8 w-full justify-center">
      <div className="">
        <img
          src="/Airpods-Image.png"
          alt="Image 1"
          className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
        />
        <p className="text-center text-paragraph mt-4 font-bold">Airpods pro</p>
      </div>

      <div className="">
        <img
          src="/mac.jpeg"
          alt="Image 2"
          className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
        />
        <p className="text-center mt-4 text-paragraph font-bold">Macbook Pro</p>
      </div>

      <div className="">
        <img
          src="/iphone-15-plus-ozellikleri-fiyati-15.jpg"
          alt="Image 3"
          className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
        />
        <p className="text-center mt-4 text-paragraph font-bold">Iphone 15</p>
      </div>

      <div className="">
        <img
          src="/airpods-max-details.webp"
          alt="Image 1"
          className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
        />
        <p className="text-center text-paragraph mt-4 font-bold">
          Airpods Pro Max
        </p>
      </div>

      <div className="">
        <img
          src="/Apple-Watch-S8-2up-hero-220907.jpg.og.jpg"
          alt="Image 2"
          className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
        />
        <p className="text-center mt-4 text-paragraph font-bold">Apple Watch</p>
      </div>

      <div className="">
        <img
          src="/ipad-air-202203-gallery-1-scaled.jpeg"
          alt="Image 3"
          className="mx-auto rounded-lg shadow-2xl h-responsive w-full object-fill"
        />
        <p className="text-center mt-4 text-paragraph font-bold">Ipad Air</p>
      </div>
    </div>
  );
}

export default Products;
