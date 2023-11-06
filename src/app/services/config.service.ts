import { Inject, Injectable } from '@angular/core';
import { routeConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(routeConfigToken) private configToken : RouteConfig) {


    console.log("config token", this.configToken);
    console.log("config Service");
   }
}
