import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {

    const artAndCraft = useLoaderData()
    const {_id, itemName, subcategory, customization, stockStatus, photo, time, price, rating, description} = artAndCraft

    const handelUpdateItem = (e) => {
        e.preventDefault()
        const form = event.target
        const itemName = form.itemName.value 
        const subcategory = form.subcategory.value 
        const customization = form.customization.value
        const stockStatus = form.stockStatus.value
        const photo = form.photo.value
        const time = form.time.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value

        const updateItems = {itemName, subcategory, customization, stockStatus, photo, time, price, rating, description}
        

        fetch(`http://localhost:5000/artAndCraft/${_id}`, {
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updateItems)
        } )
            .then (res => res.json())
            .then (data => {
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: "Item update successfully",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                }
            })

    }

    return (
        <div className="container m-auto">
            <div className="shadow-lg p-5 border rounded-md">
                <div className="my-6 text-center pb-5">
                    <h1 className="text-2xl lg:text-4xl font-bold">Update Craft Item</h1>
                </div>
                <form onSubmit={handelUpdateItem}>
                    <div className="flex gap-8">
                        <div className="flex-1 space-y-3">
                            <label className="mb-2 block font-semibold">Item Name</label>
                            <input type="text" placeholder="enter item name" id="itemName" name="itemName" defaultValue={itemName} className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Subcategory</label>
                            <select name="subcategory" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' defaultValue={subcategory} placeholder='select category'>
                                <option> Select Category</option>
                                <option value='Landscape_Painting'>Landscape Painting</option>
                                <option value='Portrait_Drawing'>Portrait Drawing</option>
                                <option value='WaterColor_Painting:'>WaterColor Painting</option>
                                <option value='Oil_Painting'>Oil Painting</option>
                                <option value='Charcoal_Sketching'>Charcoal Sketching</option>
                                <option value=' Cartoon_Drawing'> Cartoon Drawing</option>
                            </select>
                            <label className="mb-2 block font-semibold">Customization</label>
                            <select name="customization" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' defaultValue={customization} placeholder='select category'>
                                <option >Customization</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                            <label className="mb-2 block font-semibold">Stock Status</label>
                            <select name="stockStatus" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' defaultValue={stockStatus} placeholder='Stock Status'>
                                <option>Stock Status</option>
                                <option value='In stock'>In stock</option>
                                <option value='Made to order'>Made to order</option>
                            </select>
                        </div>
                        {/* right side */}
                        <div className="flex-1 space-y-3">
                            <label className="mb-2 block font-semibold">Photo</label>
                            <input type="text" placeholder="photo url" id="photo" defaultValue={photo} name="photo" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Time</label>
                            <input type="text" defaultValue={time} placeholder="time..." id="time" name="time" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Price</label>
                            <input type="text" placeholder="enter price" id="price" defaultValue={price} name="price" className="w-full p-2 border rounded-md focus:outline-blue-400" />
                            <label className="mb-2 block font-semibold">Rating</label>
                            <input type="number" placeholder="rating" id="rating" name="rating" maxLength='5' max='5' min='0' defaultValue={rating} className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                        </div>
                    </div>
                    <label className="mb-2 block font-semibold">Description</label>
                    <textarea className="w-full p-2 border rounded-md focus:outline-blue-400" type="text" placeholder="Enter short description" name="description" defaultValue={description} required>
                    </textarea>
                    <button className="btn w-full btn-success text-lg mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;