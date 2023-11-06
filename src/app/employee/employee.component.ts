import { Component } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers : [RoomsService]
})
export class EmployeeComponent {
  title : string = "hero";
  constructor() {  console.log("room service is called")}
}
