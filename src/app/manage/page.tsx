"use client";

import ExploreCard from "@/components/ExploreCard";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import React, { useEffect, useReducer, useState } from "react";
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
import { useSession } from "next-auth/react";
import getUserReservation from "@/lib/getUserReservation";
import getSingleCarProvider from "@/lib/getSingleCarProvider";
import getAllCarProviders from "@/lib/getAllCarProviders";
import deleteReservation from "@/lib/deleteReservation";
import { useRouter } from "next/navigation";
import { ro } from "date-fns/locale";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const { toast } = useToast();

  const reservationReducer = (
    state: Array<object>,
    action: { type: string; payload: object }
  ) => {
    switch (action.type) {
      case "ADD":
        const newState = new Array();
        action.payload.forEach((item) => {
          newState.push(item);
        });
        return newState;
      case "REMOVE":
        return state.filter((item) => item._id !== action.payload.id);
      default:
        return state;
    }
  };

  const [userReservatonState, userReservationDispatch] = useReducer(
    reservationReducer,
    []
  );
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    const fetchReservation = async () => {
      const res = await getUserReservation(session?.user.token);
      userReservationDispatch({ type: "ADD", payload: res.data });
    };

    fetchReservation();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(userReservatonState);
  return (
    <main>
      <NavBar stickyState={isSticky} showSignIn={false} />
      <div className="flex flex-col items-center ">
        <div className=" rounded-xl w-[90vw] h-[80vh] flex flex-col justify-start space-y-4 items-center">
          <div className="w-full flex flex-row justify-end py-1 text-black text-2xl font-kiona relative">
            <h1 className="bg-white rounded-lg px-4 absolute top-[-40px] z-20">
              {`${userReservatonState.length}/3`}
            </h1>
          </div>
          {userReservatonState.map((item) => (
            <ManageCard
              id={item._id}
              name={item.carProvider.name}
              rentDate={new Date(item.rentDate)}
              returnDate={new Date(item.rentTo)}
              onRemove={(id) => {
                userReservationDispatch({ type: "REMOVE", payload: { id } });
              }}
              deleteReservation={(id, token) =>
                deleteReservation(id, token).then(
                  toast({
                    title: "Reservation Deleted",
                    description: "Your reservation has been deleted",
                    duration: 3000,
                  })
                )
              }
              carId={item.carProvider._id}
            />
          ))}
          {userReservatonState.length < 3 ? (
            <div className="w-full h-[31%] bg-[#3c4047] flex flex-col items-center justify-center">
              <div
                className="w-fit h-fit flex flex-col items-center hover:scale-105 transition duration-150 ease-in-out active:scale-100"
                onClick={(e) => {
                  router.push("/explore");
                }}
              >
                <Image
                  src="/img/plus_sign.svg"
                  alt="plus"
                  width={50}
                  height={50}
                />
                <h1 className="text-white pt-6">Add More Reservation</h1>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
