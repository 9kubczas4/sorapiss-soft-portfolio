import { Router } from '@angular/router';
import { Tabs } from './../enums/tabs';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

const BASE_URL = `/use-cases/generic-layout`;

@Injectable()
export class UrlService {
  private root$ = new BehaviorSubject<string | null>(null);

  constructor(private readonly router: Router) {}

  setPath(tab: Tabs): void {
    this.root$.next(tab);
  }

  navigateToCreateSlideout(): void {
    this.router.navigate([`${BASE_URL}/${this.root$.value}/create`]);
  }

  navigateToEditSlideout(id: string): void {
    this.router.navigate([`${BASE_URL}/${this.root$.value}/${id}/create`]);
  }
}
