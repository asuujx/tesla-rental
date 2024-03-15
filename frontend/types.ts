import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export interface Location {
   id: number;
   name: string;
}

export interface Car {
   id: number;
   name: string;
   image: string;
   price: number;
   locationId: number;
}

export interface User {
   id: number;
   email: string;
   password: string;
}

export interface Reservation {
   id: number;
   userId: number;
   carId: number;
   startDate: string;
   endDate: string;
   totalPrice: number;
}

export type RegisterData = {
   email: string;
   password: string;
   confirmPassword: string;
};

export type FormFieldProps = {
   type: string;
   name: ValidFieldNames;
   register: UseFormRegister<RegisterData>;
   error: FieldError | undefined;
};

export type ValidFieldNames = 
| "email"
| "password"
| "confirmPassword";

export const UserSchema: ZodType<RegisterData> = z
   .object({
      email: z.string().email(),
      password: z
         .string()
         .min(8, { message: "Password is too short" })
         .max(20, { message: "Password is too long" }),
      confirmPassword: z.string(),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"], // path of error
   });
