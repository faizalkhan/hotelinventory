import { Inject, Injectable } from '@angular/core';
import { Rooms } from '../room';
import { app_service_config } from 'src/app/AppConfig/appconfig.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {


    headers  = new HttpHeaders({
    tokenheader : '1234'
   })
   
  getRooms$ = this.http.get<Rooms[]>('api/rooms', { headers : this.headers}).pipe(

    shareReplay(1)
  )

  constructor(@Inject(app_service_config) private config:any, private http: HttpClient) { 
   
    console.log("config", config.apiEndPoint)
    console.log("room service is called")}

   roomlist : Rooms[] = [];

  getRooms()
  {
    return this.http.get<Rooms[]>('api/rooms');
  }

  addRooms(rooms: Rooms)
  {
    return this.http.post<Rooms[]>('/api/rooms', rooms);
  }

  updateRooms(rooms:Rooms)
  {
    return this.http.put<Rooms[]>(`/api/rooms/${rooms.roomNumber}`, rooms);
  }

  deleteRooms(id:string)
  {
    return this.http.delete<Rooms[]>(`/api/rooms/${id}`);
  }

  getphotos()
{
  const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',
  {
    reportProgress : true 
  }
  );

  return this.http.request(request);
}



}
