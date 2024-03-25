"use client";

import ExploreCard from "@/components/ExploreCard";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import ManageCard from "@/components/ManageCard";

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
    id: "1",
    name: "Lamborghini",
    location: "Bangkok 10400",
    phone: "0987654321",
    rentDate: new Date(2024, 1, 1),
    returnDate: new Date(2024, 1, 2),
  });

  return (
    <main>
      <NavBar stickyState={isSticky} showSignIn={false} />
      <div className="flex flex-col items-center">
        <div className=" rounded-xl w-[90vw] h-[80vh] flex flex-col justify-around items-center">
          <div className="w-full flex flex-row justify-end py-1 text-black text-2xl font-kiona relative">
            <h1 className="bg-white rounded-lg px-4 absolute top-0 z-20">
              1/3
            </h1>
          </div>
          <div className="w-full h-[31%]">
            <ManageCard
              id={mockData.get("1").id}
              name={mockData.get("1").name}
              rentDate={mockData.get("1").rentDate}
              returnDate={mockData.get("1").returnDate}
            />
          </div>
          <div className="bg-black w-full h-[31%]"></div>
          <div className="bg-black w-full h-[31%]"></div>
        </div>
      </div>
    </main>
  );
};

export default page;
