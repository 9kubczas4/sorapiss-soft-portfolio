import { UrlService } from './url.service';
import { SelectionService } from './selection.service';
import { OnDestroy, inject, Injectable } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  BehaviorSubject,
  switchMap,
  of,
  takeUntil,
  first,
  delay,
  tap,
  map,
} from 'rxjs';
import { FeatureActions } from '../enums/feature-actions';
import { FeatureService } from '../interfaces/feature.service';
import { Item } from '../interfaces/item';
import { ActionsService } from './actions.service';

@Injectable()
export abstract class FeatureServiceBase<T extends Item>
  implements FeatureService<T>, OnDestroy
{
  protected readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  protected readonly dataSource$: BehaviorSubject<T[] | null> =
    new BehaviorSubject<T[] | null>(null);
  protected readonly isLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  protected readonly isDeleting$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  protected readonly actionsService = inject(ActionsService);
  protected readonly selectionService = inject(SelectionService);
  protected readonly urlService = inject(UrlService);

  constructor() {
    this.actionsService
      .onAction()
      .pipe(
        takeUntil(this.destroyed$),
        switchMap((action) => {
          switch (action) {
            case FeatureActions.Delete: {
              return this.selectionService.selection().pipe(
                first(),
                switchMap((selection) => this.delete(selection))
              );
            }
            case FeatureActions.Refresh: {
              return this.fetch();
            }
            case FeatureActions.AddNew: {
              // redirect to add form, maybe rename it to OpenCreateForm
              // this.router.navigateByUrl(`1/edit`);
              this.urlService.navigateToCreateSlideout();
              return of();
            }
            case FeatureActions.Edit: {
              // redirect to edit form, maybe rename it to OpenEditForm
              // this.router.navigate([`/1/edit`]);
              this.urlService.navigateToCreateSlideout();
              return of();
            }
            default: {
              return of();
            }
          }
        })
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

  fetch(): Observable<void> {
    this.isLoading$.next(true);
    return this.fetchItems().pipe(
      first(),
      delay(2000),
      tap((items) => this.selectionService.setFormGroupItems(items)),
      tap((items) => this.dataSource$.next(items)),
      tap((_) => this.isLoading$.next(false)),
      map((_) => undefined)
    );
  }

  delete(itemsIds: number[]): Observable<void> {
    this.isDeleting$.next(true);
    return this.deleteItems(itemsIds).pipe(
      delay(2000),
      switchMap((_) => this.fetch())
    );
  }

  edit(item: Partial<T>): Observable<void> {
    return this.editItem(item).pipe(
      delay(2000),
      switchMap((_) => this.fetch())
    );
  }

  create(item: Partial<T>): Observable<void> {
    return this.createItem(item).pipe(
      delay(2000),
      switchMap((_) => this.fetch())
    );
  }

  abstract fetchItems(): Observable<T[]>;
  abstract deleteItems(itemsIds: number[]): Observable<void>;
  abstract editItem(item: Partial<T>): Observable<void>;
  abstract createItem(item: Partial<T>): Observable<void>;
}
