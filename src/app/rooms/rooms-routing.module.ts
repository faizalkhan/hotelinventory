import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsGuard } from './rooms.guard';


const routes: Routes = [
  {
    path : '', component : RoomsComponent,
    canActivateChild: [RoomsGuard],
    children : [
      {
        path : 'add', component : RoomsAddComponent
      }
    //  {
    //     path : ':roomsId', component : RoomsBookingComponent
    //   }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class RoomsRoutingModule { }



