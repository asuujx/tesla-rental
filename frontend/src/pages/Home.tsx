import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Location } from "../../types";

function Home() {
   const [locations, setLocations] = useState<Location[]>([]);

   useEffect(() => {
      fetch("http://localhost:5000/locations")
         .then((res) => res.json())
         .then((data) => setLocations(data));
   }, []);
   return (
      <div className="flex flex-col gap-5">
         {locations.map((location, index) => (
            <Link to={`/locations/${location.id}/cars`} key={index}>
               <h2 className="px-8 py-4 shadow-lg rounded-md hover:font-semibold hover:scale-110 transition-all ease-in-out">{location.name}</h2>
            </Link>
         ))}
      </div>
   );
}

export default Home;
