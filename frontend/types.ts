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
   login: string;
   password: string;
   name: string;
   surname: string;
   email: string;
   phone: string;
}

export interface Reservation {
   id: number;
   userId: number;
   carId: number;
   startDate: string;
   endDate: string;
   totalPrice: number;
}