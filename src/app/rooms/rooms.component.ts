import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren  } from '@angular/core';
import { Rooms } from './room';

import { RoomsService } from './services/rooms.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  public roomList : Rooms[] = [];

  error$ = new Subject();

  getErrors$:any  = this.error$.asObservable();



   rooms$ = this.rooms.getRooms$.pipe(catchError((err) => {

    this.error$.next(err.message)

       return of([])

   })
   );



   roomsCount$ = this.rooms.getRooms$.pipe(
    map(rooms => {
      return rooms.length
    })
);


  public hideRooms : boolean =  true;

  @ViewChild(HeaderComponent, {static: true}) headComp !: HeaderComponent;
  @ViewChildren(HeaderComponent) headerComponent !: QueryList<HeaderComponent>;

  stream =  new Observable( observer => {

    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete()
  });

  constructor(private rooms: RoomsService, private configService : ConfigService) {


    this.getErrors$.subscribe((data:any) => {



      console.log("log error Message", data)
    })

  }

  ngAfterViewInit(): void {









    console.log(this.headComp)

    this.headComp.title = "HMR Hotel"

    this.headerComponent.last.title = "MSR Hotel"
  }

  ngAfterViewChecked(): void {
    console.log(this.headComp)

    this.headComp.title = "HMR Hotel"
  }

  ngOnInit(): void {






    this.rooms.getphotos().subscribe(data => {
      console.log(data)
    })

    console.log(this.headComp)

    this.stream.subscribe({

      next:(value) => console.log(value)

    })

    //this.rooms.getRooms.

    //  this.rooms.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms
    //  })
  }

 public handleSelectedRoom(room:any)
{

  console.log(room)
}

public addRooms()
{
   const room : Rooms =  {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 6.5,
    }

   // this.roomList.push(room)

   //this.roomList = [...this.roomList, room]

   this.rooms.addRooms(room).subscribe(data =>
    {
      this.roomList = data

});
}

priceFilter = new FormControl(0);

public editRooms()
{
   const room : Rooms =  {
      roomNumber: '3',
      roomType: 'Good Good',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 6.5,
    }


   this.rooms.updateRooms(room).subscribe(data =>
    {
      this.roomList = data

});


}



public deleteRooms()
{
  this.rooms.deleteRooms('6009b7fd-3abb-44e3-8f49-de40fdfac066').subscribe(data => {
    this.roomList = data
  })
}



toggle()
{
  this.hideRooms = !this.hideRooms;
}
}

