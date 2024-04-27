
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyArtCraftListCard = ({craftItem, craftItems, setCraftItems}) => {
    // console.log(craftItem)
    const {_id, photo, itemName} = craftItem;
    
       

    const handelDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/artAndCraft/${_id}`,{
                method: 'DELETE'
              })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                          });
                    }

                    const remaining = craftItems.filter(craftItem => craftItem._id !== _id)
                    setCraftItems(remaining)
                })

            }
          });
    }
    
    return (
        <div>
            <div className='container m-auto my-10 border-2 p-5'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" className='w-56'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <button onClick={() => handelDelete(_id)} className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

MyArtCraftListCard.propTypes = {
    craftItem:PropTypes.object,
    craftItems:PropTypes.object.isRequired,
    setCraftItems:PropTypes.func,
    
};

export default MyArtCraftListCard;