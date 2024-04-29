import { Link } from "react-router-dom";
import useArtAndCraft from "../../Hooks/useArtAndCraft";
import { Helmet } from "react-helmet-async";
// import { useEffect } from "react";


const ArtAndCraft = () => {
    const { items } = useArtAndCraft()
    // console.log(items._id)
    return (
        <div>
            <Helmet>
                <title>
                    Artisan Alley/All Art and Craft
                </title>
            </Helmet>
            <div className="container m-auto">
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 lg:my-6">
                    <thead>
                        <tr className="bg-[#0095FF] text-white">
                            <th className="py-4 lg:px-6 px-3 lg:text-lg text-left border-b"> Image</th>
                            <th className="py-4 lg:px-6 lg:text-lg text-left border-b">Product Name</th>
                            <th className="py-4 lg:px-6 text-start lg:text-lg border-b ">Price</th>
                            <th className="py-4 px-6 lg:text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item => 
                            <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                                <td className="py-4 px-4 flex justify-start">
                                    <img src={item.photo} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                </td>
                                <td className="py-4 lg:px-6 border-b lg:text-xl font-medium">{item.itemName}</td>
                                <td className="py-4 lg:px-6 px-2 border-b text-lg font-medium">{item.price}</td>
                                <td className="py-4 px-6 border-b text-end">
                                    <Link to={`/details/${item._id}`}>
                                        <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 lg:px-4 px-2 rounded-md">Details</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ArtAndCraft;