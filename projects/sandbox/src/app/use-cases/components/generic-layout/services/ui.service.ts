import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UiService {
  private readonly areTabsVisible$ = new BehaviorSubject<boolean>(true);

  areTabsVisible(): Observable<boolean> {
    return this.areTabsVisible$.asObservable();
  }

  toggleTabsVisibility(): void {
    this.areTabsVisible$.next(!this.areTabsVisible$.value);
  }
}
