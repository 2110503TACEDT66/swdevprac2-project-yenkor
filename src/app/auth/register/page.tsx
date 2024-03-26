"use client"
import { ChangeEvent } from "react";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import userRegister from "@/libs/userRegister";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const [isNameValid, setIsNameValid] = useState(false);
    const [isTelValid, setIsTelValid] = useState(false);
    const [isAddressValid, setIsAddressValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false);

    let isFormValid = isNameValid && isTelValid && isAddressValid && isEmailValid && isPassValid;
    
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
        setIsNameValid(newName.trim().length > 0);
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

    const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
        const newAddress = e.target.value;
        setAddress(newAddress);
        setIsAddressValid(newAddress.trim().length > 0);
    }

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
        const res = await userRegister(name, tel, address ,email, password);
        return res;
    }

    return (
        <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            {/* <NavBar stickyState={false} topRight={null} /> */}
            <div className="text-white p-10 sm:p-20 bg-black min-h-[80vh] flex flex-col sm:flex-row items-center">
                <div className="w-full sm:w-1/2 text-center space-y-3 flex flex-col items-center sm:items-start p-4 sm:p-8">
                <div>
                    <p className="text-3xl sm:text-5xl">Registration</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <p>ALREADY HAVE AN ACCOUNT?</p>
                    <Link
                    href={"/auth/login"}
                    className="bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent hover:transition duration-300 ease-in-out hover:scale-110 active:scale-95 active:shadow-inner"
                    >
                    GO TO LOG-IN
                    </Link>
                </div>
                </div>
                    <div className="w-full sm:w-1/2 text-white flex flex-col gap-10 items-center sm:items-start justify-end p-4 sm:p-20 border-t-2 sm:border-t-0 border-l-0 sm:border-l-2 border-l-white sm:border-l-white">
                    <div>
                        <label htmlFor="name" className="block text-gray-300">
                        NAME *
                        </label>
                        <input
                        id="name"
                        type="text"
                        value={name}
                        placeholder="Your Name"
                        required
                        onChange={(e) => handleChangeName(e)}
                        className="text-2xl w-full sm:w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="tel" className="block text-gray-300">
                        PHONE *
                        </label>
                        <input
                        id="tel"
                        type="text"
                        value={tel}
                        placeholder="0xxxxxxxxx"
                        required
                        onChange={(e) => handleChangeTel(e)}
                        className="text-2xl w-full sm:w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-300">
                        ADDRESS *
                        </label>
                        <input
                        id="address"
                        type="text"
                        value={address}
                        placeholder="Bangkok | 10400"
                        required
                        onChange={(e) => handleChangeAddress(e)}
                        className="text-2xl w-full sm:w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">
                        EMAIL *
                        </label>
                        <input
                        id="email"
                        type="text"
                        value={email}
                        placeholder="example@gmail.com"
                        required
                        onChange={(e) => handleChangeEmail(e)}
                        className="text-2xl w-full sm:w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">
                        PASSWORD *
                        </label>
                        <input
                        id="password"
                        type="password"
                        value={password}
                        required
                        placeholder="At least 8 characters"
                        onChange={(e) => handleChangePassword(e)}
                        className="text-2xl w-full sm:w-[350px] appearance-none outline-none border-solid border-b-2 border-gray-500 bg-transparent bg-opacity-20 rounded-tl rounded-tr-none py-2 text-pink-500"
                        />
                    </div>
                    <div className="mt-14">
                        <button
                        disabled={!isFormValid}
                        className={`w-full sm:w-[130px] py-2 text-lg rounded-lg ${
                            isFormValid
                            ? "bg-gradient-to-r from-pink-400 to-indigo-600 text-white"
                            : "bg-slate-100 text-slate-300 opacity-80 cursor-not-allowed"
                        }`}
                        onClick={async () => {
                            await register();
                            router.push("/auth/login");
                        }}
                        >
                        Submit
                        </button>
                    </div>
                </div>
            </div>
</main>


    );
}