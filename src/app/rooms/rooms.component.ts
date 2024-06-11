import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'rooms-user',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

rooms : Room = {
  totalRooms:20,
  availableRooms:10,
  bookedRooms:5,
}

// roomList : RoomList[] = [
//   {
//   roomNumber : 1,
//   roomType : 'Deluze Room',
//   amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
//   price : 500,
//   photos :
//   'https://unsplash.com/photos/a-building-that-has-a-clock-on-the-side-of-it-7Yma4EszCjo',
//   checkinTime : new Date('11-Nov-2021'),
//   checkoutTime : new Date('12-Nov-2021'),
// },
// {
//   roomNumber : 2,
//   roomType : 'Deluze Room',
//   amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
//   price : 1000,
//   photos :
//   'https://unsplash.com/photos/a-pile-of-different-colored-rocks-sitting-on-top-of-a-blanket-fHSguTLuLFs',
//   checkinTime : new Date('11-Nov-2021'),
//   checkoutTime : new Date('12-Nov-2021'),
// },
// {
//   roomNumber : 3,
//   roomType : 'Private Suite',
//   amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
//   price : 15000,
//   photos :
//   'https://unsplash.com/photos/a-pile-of-different-colored-rocks-sitting-on-top-of-a-blanket-fHSguTLuLFs',
//   checkinTime : new Date('11-Nov-2021'),
//   checkoutTime : new Date('12-Nov-2021'),
// },
// ];

  constructor(){}

  ngOnInit(): void {
  }
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
