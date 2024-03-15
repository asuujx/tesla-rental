import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, UserSchema } from "../../types";
import FormField from "../components/form/FormField";

function Registration() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<RegisterData>({
      resolver: zodResolver(UserSchema),
   });

   const onSubmit = async (data: RegisterData) => {
      console.log("SUCCESS", data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
         <h1 className="text-center text-4xl font-semibold">Sign Up</h1>
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
            <label className="text-lg font-medium">Password</label>
            <FormField
               type="password"
               name="password"
               register={register}
               error={errors.password}
            />
         </div>

         <div className="flex flex-col">
            <label className="text-lg font-medium">Confirm Password</label>
            <FormField
               type="password"
               name="confirmPassword"
               register={register}
               error={errors.confirmPassword}
            />
         </div>

         <button
            type="submit"
            className="p-4 text-xl bg-[#FF1744] text-white rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer"
         >
            Sign Up
         </button>
      </form>
   );
}

export default Registration;
