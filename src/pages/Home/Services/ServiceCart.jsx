import PropTypes from 'prop-types';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { title, price, img, _id } = service;
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center w-full">
                        <h3>Price: ${price}</h3>
                        {/* <button className='btn btn-circle btn-ghost'><AiOutlineArrowRight/></button> */}
                        <Link to={`/checkout/${_id}`}>
                        <button className='btn btn-error'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCart.propTypes = {
    service: PropTypes.object
}

export default ServiceCart;