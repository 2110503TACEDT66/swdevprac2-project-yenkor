'use client'
import Image from "next/image";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = ({ stickyState, topRight }: { stickyState: boolean, topRight: React.ReactNode }) => {
  const isSticky = stickyState;

       
  const {data:session} = useSession();

        // For Debug Only // 
  console.log(session?.user.token);
  /////////////////////////////////////

  return (
    <div className="py-12  sticky top-[-3rem] z-50">
      <div
        className={`flex flex-row  justify-between items-center px-12 h-20 ${
          isSticky
            ? "top-0 bg-white transition duration-300 ease-in-out shadow-xl"
            : "top-[-2rem] transition duration-300 ease-in-out"
        }`}
      >
        <div className="flex flex-row items-center">
          <Image
            alt="logo"
            src={`${
              isSticky
                ? "/img/yenkor_logo_black.png"
                : "/img/yenkor_logo_trans.png"
            }`}
            width={255}
            height={55}
            className="z-50 hover:scale-110 transition duration-300 ease-in-out"
          />

          <div className="flex flex-row space-x-8 ml-12">
            <button
              className={`font-normal text-xl hover:font-bold hover:scale-105 transition duration-300 ease-in-out active:font-normal ${
                isSticky ? "text-black  " : "text-white"
              }`}
            >
              Home
            </button>
            <button
              className={`font-normal text-xl hover:font-bold hover:scale-105 transition duration-300 ease-in-out active:font-normal ${
                isSticky ? "text-black  " : "text-white"
              }`}
            >
              Reservation
            </button>
            <button
              className={`font-normal text-xl hover:font-bold active:font-normal ${
                isSticky ? "text-black  " : "text-white"
              }`}
            ></button>
          </div>
        </div>
         {/* // To make NavBar Reusable Component */}
        <div className="flex flex-row space-x-4">
          {topRight}
        </div>

  
        
        {/* <div className="flex flex-row space-x-4">
          <button
            className={`px-6 py-2 rounded-md font-bold shadow-lg
            ${
              isSticky
                ? "bg-gray-900 text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:scale-105 active:bg-gray-600 active:scale-95 active:shadow-inner"
                : "bg-white text-black hover:bg-gray-300 hover:scale-105 transition duration-300 ease-in-out active:bg-gray-300 active:scale-95 active:shadow-inner"
            }
            
                      `}
            // "bg-white px-6 py-2 rounded-md font-bold shadow-lg
            //   hover:bg-[#F2F2F2] transition duration-300 ease-in-out
            //   active:bg-[#F2F2F2] active:scale-95 active:shadow-inner"
          >{ 
            session? <Link href={"/api/auth/signout"}>Sign out</Link>
            : <Link href={"auth/login"}>Sign in</Link>
          }
            
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
