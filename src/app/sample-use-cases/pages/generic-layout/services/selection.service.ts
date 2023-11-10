import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  ReplaySubject,
  takeUntil,
} from 'rxjs';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Injectable, OnDestroy } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable()
export class SelectionService implements OnDestroy {
  readonly formGroup: FormGroup;

  private readonly selection$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([]);
  private readonly itemsCount$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly allSelected$: Observable<boolean> = combineLatest([
    this.selection$,
    this.itemsCount$,
  ]).pipe(map(([selection, itemsCount]) => itemsCount === selection.length));
  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly indeterminate$: Observable<boolean> = combineLatest([
    this.selection$,
    this.itemsCount$,
  ]).pipe(
    map(
      ([selection, itemsCount]) =>
        itemsCount > 0 && selection.length > 0 && selection.length < itemsCount
    )
  );

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
    this.formGroup.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        const controls: { [key: string]: AbstractControl<unknown, unknown> } =
          this.formGroup.controls;
        this.selection$.next(
          Object.keys(controls)
            .map((key) => ({ selected: controls[key].value, id: Number(key) }))
            .filter((item) => item.selected)
            .map((item) => item.id)
        );
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  selection(): Observable<number[]> {
    return this.selection$.asObservable();
  }

  toggle(selectAll: boolean): void {
    const controls: { [key: string]: AbstractControl<unknown, unknown> } =
      this.formGroup.controls;
    Object.keys(controls).forEach((key) => {
      controls[key].patchValue(selectAll);
    });
  }

  setFormGroupItems(items: Item[]): void {
    this.itemsCount$.next(items.length);
    items.forEach((item) => {
      this.formGroup?.addControl(
        item.id.toString(),
        this.formBuilder.control({ value: false, disabled: false })
      );
    });
  }
}
