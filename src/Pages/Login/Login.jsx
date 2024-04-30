import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";


const Login = () => {

    const {loginUser, googleLogin, gitHubLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handelLogin = (e) => {
        e.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    title: "Login successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Invalid email or password"
                  });
            })
        

    }

    return (
        <div>
            <Helmet>
                <title>Artisan Alley/Login</title>
            </Helmet>
            <div className="container m-auto">
            <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
                <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
                    {/* register design side  */}
                    <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] md:flex md:w-[60%] lg:w-[40%]">
                        <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                        <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
                        <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
                        <div className="lg:space-y-2 space-y-0 lg:mt-0 mt-10  text-center">
                            <h2 className="lg:text-4xl text-2xl font-medium text-white/80 "></h2>
                            <p className="animate-pulse text-lg text-white/60">Please Enter You Information</p>
                        </div>
                    </div>
                    {/* input side  */}
                    <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] ">
                        <h2 className="py-8 text-center text-3xl font-bold text-[#8EA7E9]">
                        <Fade cascade damping={0.1}>
                            Login Here
                        </Fade>
                        </h2>
                        <form onSubmit={handelLogin} className="flex  w-full flex-col items-center justify-center gap-4">
                            <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" name="email"/>
                            <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="password" placeholder="Password" name="password"/>
                            <p className="text-[14px] text-gray-400">
                                Do not have an account ? 
                                <span className="text-red-500">
                                    <Link to='/register'>Register</Link> 
                                </span>
                            </p>
                            <input className="w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%]" type="Submit" />
                        </form>
                        {/* divider  */}
                        <div className="my-8 flex items-center px-8">
                            <hr className="flex-1" />
                            <div className="mx-4 text-gray-400">Continue with Social</div>
                            <hr className="flex-1" />
                        </div>
                        <div className="flex items-center justify-center gap-10 mb-10">
                            <button className="py-1 px-1 rounded-full border-2">
                                <span>
                                    <FcGoogle onClick={() => googleLogin()} className="text-4xl"></FcGoogle>
                                </span>
                            </button>
                            <button className="py-1 px-1 rounded-full border-2">
                                <span>
                                    <FaGithub onClick={() => gitHubLogin()} className="text-4xl"></FaGithub>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;