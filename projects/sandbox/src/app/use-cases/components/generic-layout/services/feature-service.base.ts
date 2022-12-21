import { SelectionService } from './selection.service';
import { OnDestroy, inject, Injectable } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject, switchMap, of, takeUntil, filter, first } from 'rxjs';
import { FeatureActions } from '../enums/feature-actions';
import { FeatureService } from '../interfaces/feature.service';
import { Item } from '../interfaces/item';
import { ActionsService } from './actions.service';

@Injectable()
export abstract class FeatureServiceBase<T extends Item> implements FeatureService<T>, OnDestroy {
  protected readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  protected readonly dataSource$: BehaviorSubject<T[] | null> = new BehaviorSubject<T[] | null>(null);
  protected readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected readonly isDeleting$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  protected readonly actionsService = inject(ActionsService);
  protected readonly selectionService = inject(SelectionService);

  constructor() {
    this.actionsService
      .onAction()
      .pipe(
        takeUntil(this.destroyed$),
        switchMap(action => {
          switch (action) {
            case FeatureActions.Delete: {
              return this.selectionService.selection().pipe(
                first(),
                switchMap(selection => this.delete(selection)),
              );
            }
            case FeatureActions.Refresh: {
              return this.fetchData();
            }
            case FeatureActions.AddNew: {
              return of();
            }
            case FeatureActions.Edit: {
              return of();
            }
            default: {
              return of();
            }
          }
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  dataSource(): Observable<T[] | null> {
    return this.dataSource$.asObservable();
  }

  isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  isDeleting(): Observable<boolean> {
    return this.isDeleting$.asObservable();
  }

  abstract fetchData(): Observable<T[]>;
  abstract delete(itemsIds: number[]): Observable<void>;
  abstract edit(item: Partial<T>): Observable<void>;
  abstract create(item: Partial<T>): Observable<void>;
}
