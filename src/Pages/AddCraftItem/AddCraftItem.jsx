
const AddCraftItem = () => {
    return (
        <div className="container m-auto">
            <div className="shadow-lg p-5 border rounded-md">
                <div className="my-6 text-center pb-5">
                    <h1 className="text-2xl lg:text-4xl font-bold">Add Craft Item</h1>
                </div>
                <form >
                    <div className="flex gap-8">
                        <div className="flex-1 space-y-3">
                            <label className="mb-2 block font-semibold"> Name</label>
                            <input type="text" placeholder="enter name" id="name" name="name" className="w-full p-2 border rounded-md focus:outline-blue-400" />
                            <label className="mb-2 block font-semibold">Item Name</label>
                            <input type="text" placeholder="enter item name" id="itemName" name="itemName" className="w-full p-2 border rounded-md focus:outline-blue-400" />
                            <label className="mb-2 block font-semibold">Subcategory</label>
                            <select name="subcategory" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' placeholder='select category'>
                                <option> Select Category</option>
                                <option value='Landscape_Painting'>Landscape Painting</option>
                                <option value='Portrait_Drawing'>Portrait Drawing</option>
                            </select>
                            <label className="mb-2 block font-semibold">Customization</label>
                            <select name="customization" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' placeholder='select category'>
                                <option >Customization</option>
                                <option value='Landscape_Painting'>Yes</option>
                                <option value='Portrait_Drawing'>No</option>
                            </select>
                            <label className="mb-2 block font-semibold">Stock Status</label>
                            <select name="StockStatus" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' placeholder='Stock Status'>
                                <option >Select Status</option>
                                <option value='Landscape_Painting'>In stock</option>
                                <option value='Portrait_Drawing'>Made to order</option>
                            </select>
                        </div>
                        {/* right side */}
                        <div className="flex-1 space-y-3">
                            <label className="mb-2 block font-semibold">Email</label>
                            <input type="text" placeholder="enter email" id="email" name="email" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Photo</label>
                            <input type="text" placeholder="photo url" id="photo" name="photo" className="w-full p-2 border rounded-md focus:outline-blue-400" />
                            
                            <label className="mb-2 block font-semibold">Time</label>
                            <input type="text" placeholder="time..." id="photo" name="photo" className="w-full p-2 border rounded-md focus:outline-blue-400" />
                            <label className="mb-2 block font-semibold">Price</label>
                            <input type="text" placeholder="enter price" id="price" name="price" className="w-full p-2 border rounded-md focus:outline-blue-400" />
                            <label className="mb-2 block font-semibold">Rating</label>
                            <input type="number" placeholder="rating" id="rating" name="rating" maxLength='5' max='5' min='0' className="w-full p-2 border rounded-md focus:outline-blue-400" />
                        </div>
                    </div>
                    <label className="mb-2 block font-semibold">Description</label>
                    <textarea className="w-full p-2 border rounded-md focus:outline-blue-400" type="text" placeholder="Enter short description" name="description" >
                    </textarea>
                    <button className="btn w-full btn-success text-lg mt-5">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;