import { FeatureActions } from './../enums/feature-actions';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ActionsService {
  private readonly onAction$ = new BehaviorSubject<FeatureActions | null>(null);

  onAction(): Observable<FeatureActions | null> {
    return this.onAction$.asObservable();
  }

  triggerAction(action: FeatureActions): void {
    this.onAction$.next(action);
  }
}
