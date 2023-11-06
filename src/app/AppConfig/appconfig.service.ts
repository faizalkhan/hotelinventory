import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";

export const app_service_config = new InjectionToken<any>('app.config');

export const app_config = {
    apiEndPoint :  environment.apiEndPoint
}
