"use client"
import { ChangeEvent } from "react";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import userRegister from "@/libs/userRegister";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [, ] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const [isNameValid, setIsNameValid] = useState(false);
    const [isTelValid, setIsTelValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false);
    
    // const [isFormValid, setIsFormValid] = useState(false);

    // const validateForm = () => {
    //     setIsFormValid(isNameValid && isTelValid && isEmailValid && isPassValid);
    // };

    const validateEmail = (email:string) => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(email);
    };

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
        setIsNameValid(newName.length > 0 && !newName.includes(' '));
        // validateForm();
    };

    const validateTel = (tel: string): boolean => {
        const telPattern = /^0\d{9}$/;
        return telPattern.test(tel);
    };
    
    const handleChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
        const newTel = e.target.value;
        setTel(newTel);
        setIsTelValid(validateTel(newTel));
        // validateForm();
    };

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
        // validateForm();
    };
    
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsPassValid(newPassword.length >= 8);
        // validateForm();
    };

    const register = async () => {
        const res = await userRegister(name, tel, email, password);
        return res;
    }

    return (
        <main className="px-[100px]">
            <NavBar stickyState={false}/>
            <div className="text-white p-20 bg-black h-[80vh] flex flex-row items-center">
                <div className="w-1/2 text-center space-y-3 flex flex-col items-start p-[100px]">
                    <div>
                        <p className="text-5xl">Registration</p>
                    </div>
                    <div className="flex gap-3">
                        <p>ALREADY HAVE ACCOUNT?</p>
                        <p className="bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">GO TO LOG-IN</p>
                    </div>
                </div>
                <div className="w-1/2 h-full text-white flex flex-col gap-10 items-start justify-end p-20 ">
                    <div>
                        <label htmlFor="name" className="block text-gray-300">NAME</label>
                        <input id="name" type="text" value={name}
                        placeholder="Name (Can't contain spaces)"
                        required
                        onChange={(e) => {handleChangeName(e); console.log(e.target.value) }}
                        className=" text-2xl w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"/>
                    </div>
                    <div>
                        <label htmlFor="tel" className="block text-gray-300">PHONE</label>
                        <input id="tel" type="text" value={tel}
                        placeholder="0xxxxxxxxx"
                        required
                        onChange={(e) => { handleChangeTel(e); console.log(e.target.value)}}
                        className=" text-2xl w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">EMAIL</label>
                        <input id="email" type="text" value={email}
                        placeholder="example@gmail.com"
                        required
                        onChange={(e) => {handleChangeEmail(e); console.log(e.target.value)}}
                        className=" text-2xl w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">PASSWORD</label>
                        <input id="password" type="password" value={password}
                        required
                        placeholder="At least 8 characters"
                        onChange={(e) => {handleChangePassword(e); console.log(e.target.value) }}
                        className="text-2xl w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"/>
                    </div>
                    <div className="mt-14">
                    <button disabled={isNameValid && isTelValid && isEmailValid && isPassValid ? false : true} className={`w-[130px] py-2 text-lg rounded-lg ${isNameValid && isTelValid && isEmailValid && isPassValid ? 'bg-gradient-to-r from-pink-400 to-indigo-600 text-white' : 'bg-slate-100 text-slate-300 opacity-80 cursor-not-allowed'}`} 
                    onClick={ async () => {
                                await register();
                                router.push('/auth/login');
                    } }>Submit</button>

                    </div>
                    
                </div>
            </div>
            
        </main>
    );
}