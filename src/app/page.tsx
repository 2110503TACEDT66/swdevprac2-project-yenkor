"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      setIsFirst(false);
    }, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-[200vh]">
      <NavBar stickyState={isSticky} />

      {/* Background */}
      <div className="overflow-hidden">
        <Image
          className={`absolute  z-0 h-[100vh]  ${
            isSticky || isFirst
              ? "top-[-100vh] right-[-16rem] transition-[top,right] duration-1000 ease-in-out"
              : "top-0 right-64 transition-[top,right] duration-1000 ease-in-out"
          }`}
          alt="background"
          src="/img/home_background.png"
          width={1000}
          height={1200}
        />

        {/*  Discover your rental car */}
        <div>
          <div className="flex flex-col items-center py-8 relative">
            <div className="flex flex-col items-start  ">
              <h1 className="text-3xl font-kiona text-white ml-3">
                DISCOVER YOUR
              </h1>
              <h1 className="text-9xl font-kiona text-white">RENTAL CAR</h1>
              <div
                className={`flex flex-row w-full justify-center h-[10vh] ${
                  isSticky || isFirst
                    ? "pl-[200vw] transition-transform-[padding]  duration-1000 ease-in-out"
                    : "transition-transform-[padding]  duration-1000 ease-in-out"
                }`}
              >
                <Image
                  className="absolute top-[-100px] w-[65vw] mt-3"
                  alt="car"
                  src="/img/porsche-model.png"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex flex-row p-12 justify-between items-center pt-[22rem] z-30">
          <div className="flex flex-row pl-5 space-x-5 items-center z-0">
            <Image
              alt="logo"
              src="/img/explore_icon.png"
              width={50}
              height={50}
              className="z-0"
            />
            <div className="flex flex-col">
              <h1 className="text-white text-lg">Explore the </h1>
              <h1 className="text-white text-lg">new travel experience</h1>
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            <Image alt="dec" src="/img/dec_1.png" width={100} height={100} />
          </div>
        </div>
      </div>

      {/* Showcase */}
      <div></div>
    </main>
  );
}
