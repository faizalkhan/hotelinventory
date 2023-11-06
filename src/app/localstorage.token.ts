import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('storage', {
        providedIn: 'root',
        factory()
        {
            return localStorage
        }
   
    }
);
