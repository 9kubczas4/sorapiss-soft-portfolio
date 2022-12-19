import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable()
export class SelectionService {
  private readonly selection$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  private readonly formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  selection(): Observable<number[]> {
    return this.selection$.asObservable();
  }

  setFormGroupItems(items: Item[]): void {}
}
