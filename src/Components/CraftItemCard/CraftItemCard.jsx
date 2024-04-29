
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftItemCard = ({item}) => {
    // console.log('from card', item)
    const {_id, itemName, photo, subcategory} = item
    return (
        <div>
            <div className=" lg:w-96 bg-base-100 shadow-xl border-2 p-5">
            <div>
                <img src={photo} alt="Shoes" className='h-80' />
            </div>
            <div className='my-5'>
                <h2 className="mb-1 text-2xl font-semibold">
                  Item Name :  {itemName}
                </h2>
                <p className="rounded-3xl text-xl">{subcategory}</p>
            </div>
            
            <Link to={`/details/${_id}`}>
                <button className='btn  btn-secondary mb-4 w-full'>View Details</button>
            </Link>
            </div>
        </div>
    );
};

CraftItemCard.propTypes = {
    item:PropTypes.object.isRequired
};

export default CraftItemCard;