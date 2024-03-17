import { FieldError, UseFormRegister } from "react-hook-form";
import validator from "validator";
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

export interface ReservationData {
   name: string;
   surname: string;
   email: string;
   phone: string;
   startLocation: string;
   startDate: Date;
   endLocation: string;
   endDate: Date;
   carId: number;
   totalPrice: number;
}

export type ReservationFormFieldProps = {
   type: string;
   name: ValidReservationFieldNames;
   register: UseFormRegister<ReservationData>;
   error: FieldError | undefined;
};

export type ValidReservationFieldNames =
   | "name"
   | "surname"
   | "email"
   | "phone"
   | "startLocation"
   | "startDate"
   | "endLocation"
   | "endDate"
   | "carId";

export const ReservationSchema: ZodType<ReservationData> = z
   .object({
      name: z.string(),
      surname: z.string(),
      email: z
         .string()
         .refine((email) => validator.isEmail(email), {
            message: "Invalid email format",
         }),
      phone: z.string().refine((phone) => validator.isMobilePhone(phone), {
         message: "Invalid phone number",
      }),
      startLocation: z.string(),
      startDate: z.date(),
      endLocation: z.string(),
      endDate: z.date(),
      carId: z.number(),
      totalPrice: z
         .number()
         .min(0, { message: "Total price cannot be negative" }),
   })
   .refine((data) => data.endDate > data.startDate, {
      message: "End date must be after start date",
      path: ["endDate"],
   });

export type RegistrationData = {
   email: string;
   password: string;
   confirmPassword: string;
};

export type RegistrationFormFieldProps = {
   type: string;
   name: ValidRegistrationFieldNames;
   register: UseFormRegister<RegistrationData>;
   error: FieldError | undefined;
};

export type ValidRegistrationFieldNames =
   | "email"
   | "password"
   | "confirmPassword";

export const UserSchema: ZodType<RegistrationData> = z
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
