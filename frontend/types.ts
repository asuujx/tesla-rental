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