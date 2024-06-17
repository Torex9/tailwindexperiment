import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto  min-h-screen">
      <h1 className="fl-text-step-0  font-bold text-center my-8">
        Apple Store
      </h1>
      <div className="grid grid-cols-responsive gap-y-14 h-80 gap-x-8">
        <PinContainer className="">
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] ">
            <img
              src="Airpods-Image.png"
              alt="Image 1"
              className="mx-auto rounded-lg shadow-2xl h-64 w-full object-cover"
            />
            <p className="text-center text-paragraph mt-4 font-bold">
              Airpods pro
            </p>
          </div>
        </PinContainer>
        <PinContainer className="">
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
            <img
              src="mac.jpeg"
              alt="Image 2"
              className="mx-auto rounded-lg shadow-2xl h-64 w-full object-cover"
            />
            <p className="text-center mt-4 text-paragraph font-bold">
              Macbook Pro
            </p>
          </div>
        </PinContainer>
        <PinContainer className="">
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
            <img
              src="iphone-15-plus-ozellikleri-fiyati-15.jpg"
              alt="Image 3"
              className="mx-auto rounded-lg shadow-2xl h-64 w-full object-cover"
            />
            <p className="text-center mt-4 text-paragraph font-bold">
              Iphone 15
            </p>
          </div>
        </PinContainer>
        <PinContainer className="">
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
            <img
              src="airpods-max-details.webp"
              alt="Image 1"
              className="mx-auto rounded-lg shadow-2xl h-64 w-full object-cover"
            />
            <p className="text-center text-paragraph mt-4 font-bold">
              Airpods Pro Max
            </p>
          </div>
        </PinContainer>
        <PinContainer className="">
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
            <img
              src="Apple-Watch-S8-2up-hero-220907.jpg.og.jpg"
              alt="Image 2"
              className="mx-auto rounded-lg shadow-2xl h-64 w-full object-cover"
            />
            <p className="text-center mt-4 text-paragraph font-bold">
              Apple Watch
            </p>
          </div>
        </PinContainer>
        <PinContainer className="">
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
            <img
              src="ipad-air-202203-gallery-1-scaled.jpeg"
              alt="Image 3"
              className="mx-auto rounded-lg shadow-2xl h-64 w-full object-cover"
            />
            <p className="text-center mt-4 text-paragraph font-bold">
              Ipad Air
            </p>
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default Page;
