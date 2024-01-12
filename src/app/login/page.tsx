"use client";
import hello from '../../assets/images/login.jpg'
import logo from '../../assets/images/logo.png'
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';



const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''      
    });




    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleLoginClick = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {                   
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);
            localStorage.removeItem("token");
            localStorage.setItem("token",data.jwt)
            if (data.status === 'success') {
                console.log('Successfully logged in');
                window.location.replace('/dashboard')
            }
            else{
                alert(data.message)
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link rel="icon" href={logo.src} type="image/icon type" />
            <title>Attendace System</title>

            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4 bg-[#000010] h-[100vh]">
                <div><img src={hello.src} className="w-0 h-0 invisible sm:visible md:visible lg:visible lg:w-[50vw] object-cover md:w-[45vw] md:h-[100%] lg:h-[100vh]" /></div>
                <div className="p-8 px-16 mt-[5%] bg-[#000010]">
                    <h1 className="lg:text-[65px] text-[35px] font-bold text-[white]">Login</h1><br />
                    {/* <h3 className="lg:text-[35px] text-[20px] text-[white] font-semibold">Login</h3><br></br> */}
                    <form className="max-w-sm">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             value={formData.email}
                             onChange={handleInputChange}
                            placeholder="Enter your email"

                                required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             value={formData.password}
                             onChange={handleInputChange}
                                placeholder="Enter your password"
                                required />
                        </div>

                        <button type="button" onClick={handleLoginClick} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                        <br></br><br></br>
                        <div className='flex items-center'>
                            <hr className='w-[170px] bg-[#4a4a4a] h-[1px] border-none'></hr><h1 className='px-2 text-center text-[white]'>OR</h1><hr className='w-[170px] bg-[#4a4a4a] h-[1px] border-none'></hr>
                        </div><br></br>
                        <center> <div className='bg-[white] w-[53%] p-3 hover:cursor-pointer rounded-lg flex '>
                            <FcGoogle className="text-2xl" />
                            <h1 className='ml-2 font-medium'>Login with Google</h1>
                        </div>
                        </center>
                        <br></br>


                        <h1 className='text-[white]'>New user? <Link href="/signup" className="font-bold underline">Signup</Link></h1>
                    </form>
                </div>
            </div>


        </>
    );
}

export default Login;