import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import ThemeControl from "../ThemeControl/ThemeControl";


const Navbar = () => {
    // const [isDark, setIsDark] = useState(
    //     JSON.parse(localStorage.getItem('isDark'))
    // )

    // useEffect(()=> {
    //     localStorage.setItem('isDark', JSON.stringify(isDark))
    // },[isDark])

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    const {user, logOut} = useAuth()

    
    
    const handelLogOut = (e) => {
        e.preventDefault()
        console.log('click')
        logOut()
            .then(() => {
                Swal.fire("logout successfully");
            })
            .catch()
    }

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div> 
               <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white mb-10">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <h2>Artisan Alley</h2>
                    </div>
                    <ul className="hidden items-center justify-between gap-10 md:flex">
                    <NavLink to='/'>
                        <li className="group flex  cursor-pointer flex-col">
                            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </NavLink>
                    <NavLink to='/artAndCraft'>
                        <li className="group flex  cursor-pointer flex-col">
                        All Art & craft<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </NavLink>
                    {
                        user && 
                        <>
                        <NavLink to='/AddCraftItem'>
                            <li className="group flex  cursor-pointer flex-col">
                            Add Craft Item<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </NavLink>
                        <NavLink to='/myArtCraftList'>
                            <li className="group flex  cursor-pointer flex-col">
                            My Art&Craft List<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </NavLink>
                        </>
                    }
                    <ThemeControl></ThemeControl>
                    {/* <input checked={isDark} onChange={() => setIsDark(!isDark)} type="checkbox" value="synthwave" className="toggle theme-controller"/> */}
                    {
                       user  ? 
                       <div className="flex items-center gap-2">
                            <div>
                                <div tabIndex={0} role="button" className="tooltip tooltip-bottom" data-tip ={`${user.displayName}`}>
                                    <img className="size-[70px] bg-slate-500 object-cover rounded-full" src={`${user?.photoURL}`} alt="avatar navigate ui" />
                                </div>
                            </div>
                            <li onClick={handelLogOut} className="group flex  cursor-pointer flex-col">
                                logOut
                            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                       </div>
                        :
                    <NavLink to='/login'>
                        <li className="group flex  cursor-pointer flex-col">
                        Login
                        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </NavLink>
                    }
                    </ul>
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg text-base  ">
                        <NavLink to='/'>
                            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                Home
                            </li>
                        </NavLink>
                        <NavLink to='/artAndCraft'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Art & craft
                            </li>
                        </NavLink>
                        {
                            user && 
                            <>
                                <NavLink to='/AddCraftItem'>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        Add Craft Item
                                    </li>
                                </NavLink>
                                <NavLink to='/myArtCraftList'>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        My Art&Craft List
                                    </li>
                                </NavLink>
                            </>
                        }
                        <NavLink to='/login'>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                Login
                            </li>
                        </NavLink>
                        </ul>
                    )}
                    </div>
                </nav>
        </div>
    );
};

export default Navbar;