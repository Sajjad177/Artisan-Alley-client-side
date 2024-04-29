import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AddCraftItem = () => {

    const {user, refetch} = useAuth()

    const handelAddItem = (e) => {
        e.preventDefault()
        const form = event.target
        const name = form.name.value;
        const itemName = form.itemName.value 
        const subcategory = form.subcategory.value 
        const customization = form.customization.value
        const stockStatus = form.stockStatus.value
        const email = form.email.value
        const photo = form.photo.value
        const time = form.time.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value

        const addItems = {name, itemName, subcategory, customization, stockStatus, email, photo, time, price, rating, description} 
        // console.log(addItems)

        fetch('http://localhost:5000/artAndCraft',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                      refetch()
                    
                }
            })

    }

    return (
        <div className="container m-auto">
            <div className="shadow-lg p-5 border rounded-md">
                <div className="my-6 text-center pb-5">
                    <h1 className="text-2xl lg:text-4xl font-bold">Add Craft Item</h1>
                </div>
                <form onSubmit={handelAddItem}>
                    <div className="flex gap-8">
                        <div className="flex-1 space-y-3">
                            <label className="mb-2 block font-semibold"> Name</label>
                            <input type="text" placeholder="enter name" id="name" name="name" defaultValue={user?.displayName} className="w-full p-2 border rounded-md focus:outline-blue-400" readOnly/>
                            <label className="mb-2 block font-semibold">Item Name</label>
                            <input type="text" placeholder="enter item name" id="itemName" name="itemName" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Subcategory</label>
                            <select name="subcategory" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' placeholder='select category'>
                                <option> Select Category</option>
                                <option value='Landscape Painting'>Landscape Painting</option>
                                <option value='Portrait Drawing'>Portrait Drawing</option>
                                <option value='WaterColor Painting:'>WaterColor Painting</option>
                                <option value='Oil Painting'>Oil Painting</option>
                                <option value='Charcoal Sketching'>Charcoal Sketching</option>
                                <option value=' Cartoon Drawing'> Cartoon Drawing</option>
                            </select>
                            <label className="mb-2 block font-semibold">Customization</label>
                            <select name="customization" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' placeholder='select category'>
                                <option >Customization</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                            <label className="mb-2 block font-semibold">Stock Status</label>
                            <select name="stockStatus" id="" className="w-full p-2 border rounded-md focus:outline-blue-400" type='text' placeholder='Stock Status'>
                                <option>Stock Status</option>
                                <option value='In stock'>In stock</option>
                                <option value='Made to order'>Made to order</option>
                            </select>
                        </div>
                        {/* right side */}
                        <div className="flex-1 space-y-3">
                            <label className="mb-2 block font-semibold">Email</label>
                            <input type="text" placeholder="enter email" id="email" name="email" defaultValue={user?.email} className="w-full p-2 border rounded-md focus:outline-blue-400" readOnly/>
                            <label className="mb-2 block font-semibold">Photo</label>
                            <input type="text" placeholder="photo url" id="photo" name="photo" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            
                            <label className="mb-2 block font-semibold">Time</label>
                            <input type="time" min='9:00' max='12:00' placeholder="time..." id="time" name="time" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Price</label>
                            <input type="text" placeholder="enter price" id="price" name="price" className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                            <label className="mb-2 block font-semibold">Rating</label>
                            <input type="number" placeholder="rating" id="rating" name="rating" maxLength='5' max='5' min='0' className="w-full p-2 border rounded-md focus:outline-blue-400" required/>
                        </div>
                    </div>
                    <label className="mb-2 block font-semibold">Description</label>
                    <textarea className="w-full p-2 border rounded-md focus:outline-blue-400" type="text" placeholder="Enter short description" name="description" required>
                    </textarea>
                    <button className="btn w-full btn-success text-lg mt-5">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;