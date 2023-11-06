import { Component } from '@angular/core';
import { Rooms } from '../room';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

    room : Rooms =  {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  }

  successMsg = ''

  constructor(private rooms: RoomsService) {}

  addRooms(roomsForm:NgForm)
  {
    this.rooms.addRooms(this.room).subscribe(data =>    
      {
        this.successMsg = "Rooms Added Successfully"

    roomsForm.resetForm({

      roomType: 'Deluxu',
      amenities: 'rt@gmail.com',
      price: 0,
      photos: 'fsdf',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 0,



    })
     
  });
  }

  
}
