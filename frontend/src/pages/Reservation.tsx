import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Car, Location, ReservationData } from "../../types";
import FormField from "../components/form/ReservationFormField";

function Reservation() {
   const [car, setCar] = useState<Car | null>(null);
   const [locationName, setLocationName] = useState<Location | null>(null);
   const [totalPrice, setTotalPrice] = useState(0);
   const location = useLocation();

   // Fetch the location and car data
   useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const locationID = queryParams.get("location");
      const carID = queryParams.get("car");

      if (locationID && carID) {
         fetch(`http://localhost:5000/locations/${locationID}`)
            .then((res) => res.json())
            .then((data) => setLocationName(data.name));

         fetch(`http://localhost:5000/locations/${locationID}/cars/${carID}`)
            .then((res) => res.json())
            .then((data) => setCar(data));
      }
   }, [location.search]);

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm<ReservationData>();

   const startDate = watch("startDate");
   const endDate = watch("endDate");

   useEffect(() => {
      if (car && startDate && endDate) {
         const start = new Date(startDate);
         const end = new Date(endDate);
         const diffTime = Math.abs(end.getTime() - start.getTime());
         // console.log(diffTime);
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
         setTotalPrice(car.price * diffDays);
      }
   }, [car, startDate, endDate]);

   const onSubmit = async (data: ReservationData) => {
      // TODO: Send a POST request to the server
      fetch("http://localhost:5000/reservations/create-reservation", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ ...data, car: car!.id, totalPrice }),
      })
         .then((res) => {
            if (res.ok) {
               return res.json();
            } else {
               throw new Error("Server response was not ok.");
            }
         })
         .then((data) => console.log(data))
         .catch((err) => console.log(err));
      console.log(JSON.stringify({ ...data, car: car!.id, totalPrice }));
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
         <h1 className="text-center text-4xl font-semibold">
            Reservation form
         </h1>
         <div className="flex gap-5">
            {car && (
               <img
                  src={`http://localhost:5000/images/${car.image}`}
                  className="mx-auto w-52 h-52 object-contain"
               />
            )}
            <div className="flex flex-col mt-10">
               <h2 className="text-2xl font-semibold">{locationName?.name}</h2>
               <h2 className="text-xl font-semibold">{car?.name}</h2>
               <div className="flex gap-2">
                  <h3>Price per day:</h3>
                  <h3 className="font-semibold">{car?.price}$</h3>
               </div>
            </div>
         </div>

         <div className="flex gap-5">
            <div className="flex flex-col">
               <label className="text-lg font-medium">Name</label>
               <FormField
                  type="name"
                  name="name"
                  register={register}
                  error={errors.name}
               />
            </div>

            <div className="flex flex-col">
               <label className="text-lg font-medium">Surname</label>
               <FormField
                  type="surname"
                  name="surname"
                  register={register}
                  error={errors.surname}
               />
            </div>
         </div>

         <div className="flex gap-5">
            <div className="flex flex-col">
               <label className="text-lg font-medium">Email</label>
               <FormField
                  type="email"
                  name="email"
                  register={register}
                  error={errors.email}
               />
            </div>

            <div className="flex flex-col">
               <label className="text-lg font-medium">Phone</label>
               <FormField
                  type="phone"
                  name="phone"
                  register={register}
                  error={errors.phone}
               />
            </div>
         </div>

         <div className="flex gap-5">
            <div className="flex flex-col">
               <label className="text-lg font-medium">Pickup location</label>
               <FormField
                  type="startLocation"
                  name="startLocation"
                  register={register}
                  error={errors.startLocation}
               />
            </div>

            <div className="flex flex-col">
               <label className="text-lg font-medium">Pickup date</label>
               <FormField
                  type="date"
                  name="startDate"
                  register={register}
                  error={errors.startDate}
               />
            </div>
         </div>

         <div className="flex gap-5">
            <div className="flex flex-col">
               <label className="text-lg font-medium">Return location</label>
               <FormField
                  type="endLocation"
                  name="endLocation"
                  register={register}
                  error={errors.endLocation}
               />
            </div>

            <div className="flex flex-col">
               <label className="text-lg font-medium">Return date</label>
               <FormField
                  type="date"
                  name="endDate"
                  register={register}
                  error={errors.endDate}
               />
            </div>
         </div>

         <div className="flex flex-col">
            <p>Total price:</p>
            <p>{totalPrice}$</p>
         </div>

         <button
            type="submit"
            className="p-4 text-xl bg-[#FF1744] text-white rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer"
         >
            Reserve
         </button>
      </form>
   );
}

export default Reservation;
