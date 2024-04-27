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