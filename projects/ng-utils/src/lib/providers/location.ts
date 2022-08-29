import { InjectionToken, Provider } from '@angular/core';

export const LOCATION = new InjectionToken<Storage>('LOCATION');

export const locationProvider: Provider = {
  provide: LOCATION,
  useValue: window.location,
};
