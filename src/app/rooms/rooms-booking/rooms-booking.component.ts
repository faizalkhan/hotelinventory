import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {


  id: number = 0;

  idNumber: string | null = '';


  constructor(private router : ActivatedRoute){

    //this.id = this.router.snapshot.params['roomsId']

    //this.idNumber$ = this.router.params.pipe(map(item => item['roomsId']))

     this.router.paramMap.subscribe((params) =>  
     {      
        this.idNumber = params.get('roomsId');      
     });

    //this.router.params.subscribe(id =>  this.id = id['roomsId'])
  }

}
