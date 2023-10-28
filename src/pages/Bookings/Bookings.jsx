import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import BookingTableRow from "./BookingTableRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        axios(url)
            .then(data => {
                setBookings(data?.data);
            })
    }, [url])

    const handleDelete = id => {
        console.log(id);
        const proceed = confirm('are you sure you want to delete')
        if (proceed) {
            axios.delete(`http://localhost:5000/bookings/${id}`)
            .then(data => {
                console.log(data.data)
            if (data.data.deletedCount) {
                alert('deleted');
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining)
            }
            })
        }
    }

    const handleConfirm = id => {
        axios.patch(`http://localhost:5000/bookings/${id}`,{status: 'confirm'})
        .then(data=>{
            if (data.data.modifiedCount > 0) {
                //updateState
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking=>booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

  
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Remove</th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingTableRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;