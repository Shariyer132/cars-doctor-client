import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res=> res.json())
       .then(data=>setServices(data))
    },[])
    return (
        <div className="pt-20">
            <div className="text-center">
                <h3 className="text-xl font-bold text-orange-400">Service</h3>
                <h2 className="text-4xl py-5 font-bold">Our Service Area</h2>
                <p className="max-w-3xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service=> <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;