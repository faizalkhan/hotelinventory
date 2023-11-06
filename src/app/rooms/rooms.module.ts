import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { routeConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    FilterPipe,
   ],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    RoomsRoutingModule
  ],
  providers : [
    {
      provide : routeConfigToken,
      useValue : {title : 'Rooms'}
    }
  ]
})
export class RoomsModule { }
