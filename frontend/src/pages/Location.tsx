import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "../../types";

function Location() {
   const { locationID } = useParams();
   const [cars, setCars] = useState<Car[]>([]);

   useEffect(() => {
      fetch(`http://localhost:5000/locations/${locationID}/cars`)
         .then((res) => res.json())
         .then((data) => setCars(data));
   }, [locationID]);

   return (
      <div className="w-1/2 flex flex-col gap-5">
         {cars.map((car, index) => (
            <div
               key={index}
               className="w-full p-5 shadow-lg rounded-md flex justify-between hover:scale-110 transition-all ease-in-out"
            >
               <div className="flex gap-5">
                  <img
                     src={`http://localhost:5000/images/${car.image}`}
                     alt={car.name}
                     className="w-52 h-52 object-contain"
                  />
                  <div className="flex flex-col gap-2 ">
                     <h1 className="text-3xl font-semibold">{car.name}</h1>
                     <h2>Price for 1 day:</h2>
                     <h2 className="text-xl font-semibold">{car.price}$</h2>
                  </div>
               </div>

               <button className="self-end bg-[#FF1744] text-white px-6 py-2 rounded-md">
                  Reserve
               </button>
            </div>
         ))}
      </div>
   );
}

export default Location;
