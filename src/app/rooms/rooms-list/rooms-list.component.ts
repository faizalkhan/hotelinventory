import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Rooms } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, DoCheck {

 @Input() rooms : Rooms[]  = [];


 @Input() price : any = 0;

 @Output() selectedRooms = new EventEmitter<Rooms>();

 ngOnChanges(changes: SimpleChanges): void {

  console.log(changes['rooms'].currentValue)

  // changes.forEach((element, index) => {

  // });

     changes['rooms'].currentValue.forEach((element:any, index:number) => {
     if(element.roomNumber)
     {
      element.roomNumber = index;
     }
  });

 }

 ngDoCheck(): void {
   console.log("on changes is called")
 }

 public selectRooms(room : Rooms)
{
  this.selectedRooms.emit(room);
}


ngOnDestroy()
{
  console.log("on destroy is called")
}

}
