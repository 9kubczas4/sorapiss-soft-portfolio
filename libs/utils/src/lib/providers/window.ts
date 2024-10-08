import { InjectionToken, Provider } from '@angular/core';

export const WINDOW = new InjectionToken('WindowToken');

export const WindowProvider: Provider = { provide: WINDOW, useValue: window };
