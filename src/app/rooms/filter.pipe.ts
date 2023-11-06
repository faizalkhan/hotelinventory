import { Pipe, PipeTransform } from '@angular/core';
import { Rooms } from './room';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: Rooms[], price: number): Rooms[] {
    return rooms.filter((rooms) => rooms.price > price);
  }

}
