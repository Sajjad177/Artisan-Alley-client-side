import { Link } from "react-router-dom";
import useArtAndCraft from "../../Hooks/useArtAndCraft";


const ArtAndCraft = () => {
    const { items } = useArtAndCraft()
    console.log(items)

    return (
        <div className="container m-auto">
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#0095FF] text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Stock Status</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Customization</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Rating</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Price</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item => 

                            <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                                <td className="py-4 px-4 flex justify-start">
                                    <img src={item.photo} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                </td>
                                <td className="py-4 px-6 border-b text-xl font-medium">{item.itemName}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{item.stockStatus}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{item.customization}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{item.rating}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{item.price}</td>
                                <td className="py-4 px-6 border-b text-end">
                                    <Link to='/details'>
                                        <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                    </Link>
                                </td>
                            </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArtAndCraft;