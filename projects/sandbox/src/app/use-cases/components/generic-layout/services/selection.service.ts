import { BehaviorSubject, Observable, tap } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable()
export class SelectionService {
  readonly formGroup: FormGroup;

  private readonly ALL = 'ALL';
  private readonly selection$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  private allFormControl?: FormControl;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
    this.formGroup.valueChanges.subscribe(c => {
      const controls: { [key: string]: AbstractControl<any, any> } = this.formGroup.controls;
      const keysToCheck = Object.keys(controls).filter(key => key !== this.ALL);
      // const temp = Object.values(controls)
      console.log(Object.values(controls));
      console.log(this.formGroup.controls);
    });
  }

  selection(): Observable<number[]> {
    return this.selection$.asObservable();
  }

  setFormGroupItems(items: Item[]): void {
    this.allFormControl = this.formBuilder.control({ value: false, disabled: false });

    this.formGroup?.addControl(this.ALL, this.allFormControl);
    items.forEach(item => {
      this.formGroup?.addControl(item.id.toString(), this.formBuilder.control({ value: false, disabled: false }));
    });

    this.allFormControl.valueChanges
      .pipe(
        tap(value => {
          const controls: { [key: string]: AbstractControl<any, any> } = this.formGroup.controls;
          const keysToUpdate = Object.keys(controls).filter(key => key !== this.ALL);
          keysToUpdate.forEach(key => {
            controls[key].patchValue(value);
          });
          console.log();
        }),
      )
      .subscribe();
  }
}
