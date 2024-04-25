import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {

    const [register, setRegister] = useState(false);

    return (
        <div>
            <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
                {/* register form  */}
                <form className={`p-8 w-full ${register ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
                    <div className="space-y-5">
                        <label htmlFor="name" className="block">Name</label>
                        <input id="name" type="name" placeholder="John Doe" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="name" className="block">Photo</label>
                        <input id="name" type="name" placeholder="Photo url..." className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="u_email" className="block">Email</label>
                        <input id="u_email" type="u_email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="u_password" className="block">Password</label>
                        <input id="u_password" type="u_password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"/>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button className="btn py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Register</button>
                    <p className="mb-3 text-center">Already have an account?<Link onClick={() => {setRegister(!register);}} className="underline font-semibold">Login</Link></p>
                    <hr />
                    <div className="flex">
                        <button type="button" className="py-2 px-2 mb-4 mt-8 mx-auto shadow-lg border rounded-full border-black flex items-center gap-3 ">
                        <FcGoogle className="text-2xl"></FcGoogle> 
                        </button>
                        <button type="button" className="py-2 px-2 mb-4 mt-8 mx-auto shadow-lg border rounded-full border-black flex items-center gap-3">
                        <FaGithub className="text-2xl"></FaGithub> 
                        </button>
                    </div>
                </form>
                {/* img */}
                <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                    <img src="https://source.unsplash.com/random" className="object-cover h-full" alt="card navigate ui" />
                </div>
                {/* login form */}
                <form className={`p-8 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
                    <div className="space-y-5">
                        <label htmlFor="_email" className="block">Email</label>
                        <input id="_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="_password" className="block">Password</label>
                        <input id="_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"/>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Login</button>
                    <p className="mb-3 text-center">Don&apos;t have an account?<Link onClick={() => {setRegister(!register);}} className="underline font-semibold">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;