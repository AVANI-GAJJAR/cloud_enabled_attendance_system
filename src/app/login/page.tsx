"use client";
import hello from '../../assets/images/login.jpg'
import logo from '../../assets/images/logo.png'

import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <>

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link rel="icon" href={logo.src} type="image/icon type" />
</head>
<body>
    
<div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4 bg-[#000010] h-[100vh]">
            <div><img src={hello.src} className="w-0 h-0 invisible sm:visible md:visible lg:visible lg:w-[50vw] object-cover md:w-[45vw] md:h-[100%] lg:h-[100vh]" /></div>
            <div className="p-8 px-16 mt-[5%] bg-[#000010]">
                <h1 className="lg:text-[65px] text-[35px] font-bold text-[white]">Login</h1><br />
                {/* <h3 className="lg:text-[35px] text-[20px] text-[white] font-semibold">Login</h3><br></br> */}
                <form className="max-w-sm">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email"
                          
                            required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            
                            placeholder="Enter your password"
                            required />
                    </div>

                    <button type="button"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                    <br></br><br></br>
                    <h1 className='text-center text-[white]'>OR</h1><br></br>
                    <div className='bg-[white] w-[53%] p-3 hover:cursor-pointer rounded-full flex '>
                    <FcGoogle className="text-2xl"/> 
                    <h1 className='ml-2 font-medium'>Login with Google</h1>
                    </div><br></br>


                     <h1 className='text-[white] font-medium'>New user? <Link href="/signup" className="underline">Signup</Link></h1>
                </form>
            </div>
        </div>
</body>
</html>






        </>
    );
}

export default Login;