
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftItemCard = ({item}) => {
    console.log('from card', item)
    const {itemName, photo} = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {itemName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
            <Link to='/details'>
                <button className='btn  btn-secondary mb-4'>View Details</button>
            </Link>
            </div>
        </div>
    );
};

CraftItemCard.propTypes = {
    item:PropTypes.object.isRequired
};

export default CraftItemCard;