export interface Room {
    totalRooms : number,
    bookedRooms : number,
    availableRooms : number
}

export interface RoomList {
    roomNumber : number;
    roomType : string;
    amenities : string;
    price : number;
    image : string;
    checkinTime : Date;
    checkoutTime : Date;
}