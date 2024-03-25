"use client";

import ExploreCard from "@/components/ExploreCard";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
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
  return (
    <main>
      <NavBar stickyState={isSticky} showSignIn={true} />
      <div className="flex flex-col items-center">
        <div className="flex flex-row w-[93%] p-6  items-center justify-between">
          <h1 className="text-3xl font-poppins text-white">Search Result</h1>
          <Input
            placeholder="Search"
            type="text"
            className="w-1/4 h-12 rounded-2xl bg-[#1E1E1E] text-white"
          />
        </div>
        <div className=" w-[93%] h-2 flex flex-row flex-wrap">
          <ExploreCard />
        </div>
      </div>
    </main>
  );
};

export default page;
