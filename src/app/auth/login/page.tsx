"use client"
import NavBar from "@/components/NavBar";
import { TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { ChangeEvent } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function LoginPage({errorMessage} : {errorMessage: string}) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false);

    // const { data: session} = useSession();
    // if (session) redirect("/");


    // const router = useRouter();
    // const { data: session} = useSession();
    // if (session) redirect("/");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const validateEmail = (email:string) => {
        // Regular expression pattern for email validation
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(email);
    };

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    };
    
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        
        setIsPassValid(newPassword.length > 0);
    };
    
    // const login = async () =>  {
    //     const res = await signIn("credentials", {
    //         email: email,
    //         password: password,
    //         callbackUrl: '/car'
    //     });
        
    //     // if (res != null) alert("SUCCESS");
    //     // else alert("NULL")
    // }

    return (
        <main className="px-[100px]">
            {/* <NavBar stickyState={false} topRight={null}/> */}
            <div className="text-white p-20 bg-black h-[80vh] flex flex-row items-center">
                <div className="w-1/2 text-center space-y-3 flex flex-col items-start p-[100px]">
                    <div>
                        <p className="text-5xl">Log-in</p>
                    </div>
                    <div className="flex gap-3">
                        <p>DOESN'T HAVE ONE?</p>
                        <Link href={"/auth/register"} className="bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent
                        hover:transition duration-300 ease-in-out hover:scale-105 active:scale-95 active:shadow-inner"
                        >GO TO SIGN-UP
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 h-full text-white flex flex-col gap-10 items-start justify-end p-20 border-l-2 border-l-white">
                    <div>
                        <p className="my-4 text-rose-700 font-medium text-lg">{`${errorMessage ?  errorMessage : ''}`}</p>
                        <label htmlFor="email" className="block text-gray-300">EMAIL</label>
                        <input id="email" type="text" value={email}
                        placeholder="example@gmail.com"
                        required
                        onChange={(e) => handleChangeEmail(e)}
                        className=" text-2xl w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">PASSWORD</label>
                        <input id="password" type="password" value={password}
                        required
                        onChange={(e) => {handleChangePassword(e) }}
                        className="text-2xl w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"/>
                    </div>
                    <div className="mt-14">
                    <button disabled={isEmailValid && isPassValid ? false : true} className={`w-[130px] py-2 text-lg rounded-lg ${isEmailValid && isPassValid ? 'bg-gradient-to-r from-pink-400 to-indigo-600 text-white' : 'bg-slate-100 text-slate-300 opacity-80 cursor-not-allowed'}`} 
                    onClick={ () => {
                        signIn("credentials", {
                            email: email,
                            password: password,
                            callbackUrl: '/car'
                        });
                    } }>Submit</button>

                    </div>
                    
                </div>
            </div>
            
        </main>
    );
}

