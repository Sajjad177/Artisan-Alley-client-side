import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CraftItemCard from "../../Components/CraftItemCard/CraftItemCard";
import useArtAndCraft from "../../Hooks/useArtAndCraft";


const Home = () => {

    const {isLoading, items} = useArtAndCraft()
    // console.log(items)

    if(isLoading){
        <div>
            <h2 className="text-9xl bg-red-600">loading.........</h2>
        </div>
    }

    return (
        <div className="container m-auto">
            <Banner></Banner>
            <div className="text-center mb-20 ">
                <h1 className="lg:text-5xl text-3xl font-bold border-b-2 border-dashed pb-10">Craft Items</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10 ">
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
                <h2 className="text-5xl font-bold my-10 text-center">Art & Craft Categories</h2>
                <div className="grid grid-cols-3 gap-5">
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
                <h2 className="text-4xl">Extra section - 1 </h2>
            </div>
            <div className="border my-10">
                <h2 className="text-4xl">Extra section - 2 </h2>
            </div>
        </div>
    );
};

export default Home;