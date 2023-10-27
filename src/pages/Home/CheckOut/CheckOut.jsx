import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking={
            customerName: name,
            email,
            service: title,
            service_id: _id,
            img,
            date,
            Price: price
        }
        axios.post('http://localhost:5000/bookings',{booking})
        .then(data=>{
            console.log(data.data);
            if (data.data.insertedId) {
                alert('service booked')
            }
        })
        }
    return (
        <div className="card flex-shrink-0 w-full p-16 shadow-2xl bg-base-100">
            <h2>Book Service: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-error" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;