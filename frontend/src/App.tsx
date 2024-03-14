import { useEffect, useState } from "react";
import { Location } from "../types";

function App() {
   const [locations, setLocations] = useState<Location[]>([]);

   useEffect(() => {
      fetch("http://localhost:5000/locations")
         .then((res) => res.json())
         .then((data) => setLocations(data));
   }, []);

   return (
      <div>
         <h1 className="text-6xl">Tesla Renting Service</h1>
         {locations.map((location, index) => (
            <div key={index}>
               <h2>{location.name}</h2>
            </div>
         ))}
      </div>
   );
}

export default App;
