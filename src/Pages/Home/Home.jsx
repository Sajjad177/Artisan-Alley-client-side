import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CraftItemCard from "../../Components/CraftItemCard/CraftItemCard";
import useArtAndCraft from "../../Hooks/useArtAndCraft";
import { Helmet } from "react-helmet-async";


import landscape from "../../assets/image/landscape.jpg"
import Charcoal from "../../assets/image/landscape.jpg"
import portraitDrawing from "../../assets/image/charcoal.jpg"
import WaterColor from "../../assets/image/Watercolor.jpg"
import oil from "../../assets/image/oil.jpg"
import Cartoon from "../../assets/image/cartoon.jpg"
import Blogs from "../../Components/Blogs/Blogs";
import MostPopulerPic from "../../Components/MostPopulerPic/MostPopulerPic";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
// import { useEffect, useState } from "react";

const Home = () => {
    // const [subCategories, setSubCategories] = useState([]);
    const {isLoading, sliceItem} = useArtAndCraft()

    // useEffect(() => {
    //     fetch('http://localhost:5000/subCategory',)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setSubCategories(data);
    //         })
    // },[])

    const [text] = useTypewriter({
        words: ["Craft", "Items"],
        loop: {}
      })

    if(isLoading){
       return <div className="flex items-center justify-center">
            <div className="w-20 h-20  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>

        </div>
    }

    
    
    

    return (
        <div>
            <Helmet>
                <title>
                    Artisan Alley / Home
                </title>
            </Helmet>
            <div className="container m-auto">
                <Banner></Banner>
                <div className="mb-14 ">
                    <h1 className="lg:text-5xl text-3xl font-bold border-b-2 border-dashed pb-10 text-center">
                        
                         {text} 
                        <span><Cursor></Cursor></span> 
                    </h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mt-10 ">
                        {
                            sliceItem?.map((item) => 
                            <CraftItemCard
                                key={item._id}
                                item={item}>
                            </CraftItemCard>)
                        }
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="lg:text-5xl text-3xl font-bold my-10 text-center">Art & Craft Categories</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <Link to='/landscape'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer max-h-60">
                                <div className="">
                                    <img src={landscape} alt="Shoes" className="w-full h-60 rounded-2xl" />
                                </div>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center pt-24">Landscape Painting</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/portraitDrawing'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer max-h-60">
                                <div>
                                    <img src={portraitDrawing} alt="Shoes" className="w-full h-60 rounded-2xl"/>
                                </div>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center pt-24">Portrait Drawing</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/waterColor'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer max-h-60">
                                <div>
                                    <img src={WaterColor} alt="Shoes" className="w-full h-60 rounded-2xl" />
                                </div>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center pt-24">Water Color Painting</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/oilPainting'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer max-h-60">
                                <div>
                                    <img src={oil} alt="Shoes" className="w-full h-60 rounded-2xl"/>
                                </div>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center pt-24">Oil Painting</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/charcoalSketching'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer max-h-60">
                                <div>
                                    <img src={Charcoal} alt="Shoes" className="w-full h-60 rounded-2xl"/>
                                </div>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center pt-24">Charcoal Sketching</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/cartoonDrawing'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer max-h-60">
                                <div>
                                    <img src={Cartoon} alt="Shoes" className="w-full h-60 rounded-2xl"/>
                                </div>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center pt-24">Cartoon Drawing</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Extra-1  */}
                <Blogs></Blogs>
                {/* Extra-2  */}
                <MostPopulerPic></MostPopulerPic>
            </div>
        </div>
    );
};

export default Home;