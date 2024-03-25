"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mockData = new Map();
  mockData.set("1", {
    name: "Lamborghini",
    location: "Bangkok 10400",
    phone: "0987654321",
  });
  return (
    <main>
      <NavBar stickyState={isSticky} showSignIn={false} />
      <div className="flex flex-col items-center">
        <div className=" rounded-xl w-[90vw] h-[80vh] flex flex-col justify-around items-center">
          <div className="w-full flex flex-row justify-end py-1 text-black text-2xl font-kiona relative">
            <h1 className="bg-white rounded-lg px-4 absolute top-0">1/3</h1>
          </div>
          <div className="bg-black w-full h-[31%]">
            {/* Card */}
            <div className="flex flex-row w-full h-full bg-slate-500 rounded-lg shadow-lg">
              <div className="w-[30%] h-full bg-red-100 relative rounded-lg">
                <Image
                  src="/img/place_holder.jpg"
                  fill={true}
                  alt="car"
                  className="object-cover rounded-l-lg shadow-xl"
                />
              </div>
              <div className="p-6 bg-orange-600">
                <h1 className="text-white font-poppins font-bold text-4xl">
                  {mockData.get("1").name}
                </h1>
              </div>
            </div>
            {/* Card */}
          </div>
          <div className="bg-black w-full h-[31%]"></div>
          <div className="bg-black w-full h-[31%]"></div>
        </div>
      </div>
    </main>
  );
};

export default page;
