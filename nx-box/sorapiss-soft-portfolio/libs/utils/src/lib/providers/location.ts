import { InjectionToken, Provider } from '@angular/core';

export const LOCATION = new InjectionToken<Storage>('LOCATION');

export const LocationProvider: Provider = {
  provide: LOCATION,
  useValue: window.location,
};
