import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CraftItemCard from "../../Components/CraftItemCard/CraftItemCard";
import useArtAndCraft from "../../Hooks/useArtAndCraft";
import { Helmet } from "react-helmet-async";
import blogImage1 from "../../assets/image/blog-image-1.jpg"
import blogImage2 from "../../assets/image/blog-image-2.jpg"
import blogImage3 from "../../assets/image/blog-image-3.jpg"
import blogImage4 from "../../assets/image/blog-image-4.jpg"
import img1 from "../../assets/image/img-1.jpg"
import img2 from "../../assets/image/img-2.jpg"
import img3 from "../../assets/image/img-3.jpg"
import img4 from "../../assets/image/img-4.jpg"

const Home = () => {

    const {isLoading, items} = useArtAndCraft()
    // console.log(items)

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
                    <h1 className="lg:text-5xl text-3xl font-bold border-b-2 border-dashed pb-10 text-center">Craft Items</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mt-10 ">
                        {
                            items?.map((item) => 
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
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center py-24">Landscape Painting</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/portraitDrawing'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center py-24">Portrait Drawing</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/waterColor'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center py-24">Water Color Painting</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/oilPainting'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center py-24">Oil Painting</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/charcoalSketching'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center py-24">Charcoal Sketching</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/cartoonDrawing'>
                            <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold flex  justify-center py-24">Cartoon Drawing</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="border">
                <section className="py-6 sm:py-12 bg-gray-200">
                    <div className="container p-6 mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Art And Craft Blogs</h2>
                            <p className="font-serif text-sm text-gray-400">Read the Blog learn more about art</p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <article className="flex flex-col bg-white">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage1} />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 1, 2020</span>
                                        <span>2.1K views</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col bg-white">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage2} />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 2, 2020</span>
                                        <span>2.2K views</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col bg-white">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage3} />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 3, 2020</span>
                                        <span>2.3K views</span>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col bg-white">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blogImage4} />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>June 4, 2020</span>
                                        <span>2.4K views</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                </div>
                <div className="my-10">
                    <h1 className="text-5xl text-center font-bold my-10">Most Popular Pictures </h1>
                <section className="py-6 bg-gray-300">
                    <div className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img1} />
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img2} />
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img3} />
                            <img className="object-cover w-full bg-gray-500 aspect-square" src={img4} />
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
    );
};

export default Home;