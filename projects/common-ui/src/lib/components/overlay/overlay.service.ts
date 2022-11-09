import { OverlayComponent } from './overlay.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementRef, Injectable, ViewContainerRef, TemplateRef, ComponentRef, ChangeDetectorRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  #isDisplayed = new BehaviorSubject<boolean>(false);

  isDisplayed: Observable<boolean> = this.#isDisplayed.asObservable();

  overlayRef?: ComponentRef<OverlayComponent>;

  constructor() {}

  displayOverlay(
    viewContainerRef: ViewContainerRef,
    element: ElementRef<HTMLElement>,
    templateRef: TemplateRef<any>,
    changeDetectorRef: ChangeDetectorRef,
  ): void {
    this.#isDisplayed.next(true);

    this.overlayRef = viewContainerRef.createComponent(OverlayComponent);
    this.overlayRef.instance.content = templateRef;

    changeDetectorRef.detectChanges();
  }

  closeOverlay() {
    this.#isDisplayed.next(false);
  }
}
