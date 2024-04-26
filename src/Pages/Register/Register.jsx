import { MdEmail } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";


import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser,} = useAuth() 
    const navigate = useNavigate()


    const handelRegister = (e) => {
        e.preventDefault()
        console.log('okok ok')
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)

        if(password.length < 6){
            Swal.fire({
                icon: "warning",
                title: "Give minimum 6 password",
              });
            return
        }else if(!/[A-Z]/.test(password)){
            Swal.fire({
                icon: "warning",
                title: "Give minimum one Uppercase Character",
              });
            return;
        }else if (!/[a-z]/.test(password)){
            Swal.fire({
                icon: "warning",
                title: "Give minimum one lowerCase Character",
              });
            return;
        }
        
        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    title: "Account Create Successfully",
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
                e.target.reset()
                navigate('/')
                
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(() => {

                })
                .catch()
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
            <div className="p-12 border-2">
                <h1 className="text-4xl font-bold pb-8 text-center">Register Your Account</h1>
                <form onSubmit={handelRegister} className ="space-y-5">
                    <label htmlFor="name" className="block">Name</label>
                    <div className="relative ">
                        <input id="name" name="name" type="text" placeholder="enter your name" className="p-3 block w-full pl-10 drop-shadow-lg outline-none" required/>
                        <span className="absolute top-1/4 left-2">
                            <FaUser className="text-2xl"></FaUser>
                        </span>
                    </div>
                    <label htmlFor="photo" className="block">Photo</label>
                    <div className="relative ">
                        <input id="photo" name="photo" type="text" placeholder="enter photo url" className="p-3 block w-full pl-10 drop-shadow-lg outline-none" required/>
                        <span className="absolute top-1/4 left-2">
                            <MdAddPhotoAlternate className="text-2xl"></MdAddPhotoAlternate>
                        </span>
                    </div>
                    <label htmlFor="email" className="block">Email</label>
                    <div className="relative ">
                        <input id="email" name="email" type="email" placeholder="example@gmail.com" className="p-3 block w-full pl-10 drop-shadow-lg outline-none" required/>
                        <span className="absolute top-1/4 left-2">
                            <MdEmail className="text-2xl"></MdEmail>
                        </span>
                    </div>
                    <label htmlFor="password" className="block">Password</label>
                    <div className="relative">
                        <input id="pass" name="password" type="password" placeholder=".............." className="p-3 block w-full pl-10 drop-shadow-lg outline-none" required/>
                        <span className="absolute top-1/4 left-2">
                            <SiSpringsecurity className="text-2xl"></SiSpringsecurity>
                        </span>
                    </div>
                    <div className="text-center">
                        <p>
                            Already have an account <span className="text-red-500">
                                <Link to='/login'>Login</Link>
                            </span>
                        </p>
                    </div>
                    <button className="text-xl w-full h-14 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">Register</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Register;