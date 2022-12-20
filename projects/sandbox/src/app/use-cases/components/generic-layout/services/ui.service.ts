import { FeatureActions } from './../enums/feature-actions';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UiService {
  private readonly areTabsVisible$ = new BehaviorSubject<boolean>(true);
  private readonly onAction$ = new Subject<FeatureActions>();

  areTabsVisible(): Observable<boolean> {
    return this.areTabsVisible$.asObservable();
  }

  onAction(): Observable<FeatureActions> {
    return this.onAction$.asObservable();
  }

  toggleTabsVisibility(): void {
    this.areTabsVisible$.next(!this.areTabsVisible$.value);
  }

  triggerAction(action: FeatureActions): void {
    this.onAction$.next(action);
  }
}
