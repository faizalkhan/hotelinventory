export interface Rooms {
    roomNumber?: string;
    roomType: string;
    amenities: string;
    price: number;
    photos?: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}