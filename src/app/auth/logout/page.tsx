'use client'
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import { Height } from "@mui/icons-material";

export default function LogoutPage() {

    const router = useRouter();

    return (
        <main className="w-[100vw] h-[100vh] flex justify-center items-center bg-black">
            {/* <NavBar stickyState={false} topRight={null}/> */}
            
                <div className="w-1/3 h-fit bg-white backdrop-blur-md rounded-xl text-center space-y-5 shadow"> {/* Card */}
                    <div>
                        <LogoutIcon sx={{height: 300, fontSize: 180}}/>
                    </div>
                    <div className="text-2xl font-medium">
                        Are you sure to Logout?
                    </div>
                    <div className="flex gap-12 justify-center text-white pb-10">
                        <button className="ring ring-indigo-300 rounded-full p-2 w-[100px] bg-gradient-to-r from-pink-400 to-indigo-600 text-white' transition duration-100 ease-in-out hover:scale-110 active:scale-95 active:shadow-inner"
                        onClick={() => router.back() }>Go Back</button>
                        
                        <button className="ring ring-neutral-300 rounded-full p-2 w-[100px] bg-black transition duration-100 ease-in-out hover:scale-110  active:scale-95 active:shadow-inner"
                        onClick={ async () => {
                            await signOut({callbackUrl: "/"})
                        }}>Log out</button>
                    </div>
                </div> 
                
                
            
        </main>
    );
}