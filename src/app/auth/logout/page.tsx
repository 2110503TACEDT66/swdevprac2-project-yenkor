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
        <main className="w-[100vw] h-[100vh] flex justify-center items-center">
            {/* <NavBar stickyState={false} topRight={null}/> */}
            
                <div className="w-1/3 h-1/2 bg-white rounded-xl text-center space-y-5"> {/* Card */}
                    <div>
                        <LogoutIcon sx={{height: 300, fontSize: 180}}/>
                    </div>
                    <div className="text-2xl font-medium">
                        Are you sure to Logout?
                    </div>
                    <div className="flex gap-12 justify-center text-white">
                        <button className="ring ring-indigo-300 rounded-full p-2 w-[100px] bg-gradient-to-r from-pink-400 to-indigo-600 text-white'"
                        onClick={() => router.back() }>Go Back</button>
                        
                        <button className="ring ring-neutral-300 rounded-full p-2 w-[100px] bg-neutral-400"
                        onClick={ async () => {
                            await signOut({callbackUrl: "/"})
                        }}>Log out</button>
                    </div>
                </div> 
                
                
            
        </main>
    );
}