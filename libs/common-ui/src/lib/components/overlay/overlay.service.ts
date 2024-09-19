import { OverlayComponent } from './overlay.component';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import {
  ElementRef,
  Injectable,
  ViewContainerRef,
  TemplateRef,
  ComponentRef,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OverlayService implements OnDestroy {
  #isDisplayed = new BehaviorSubject<boolean>(false);

  isDisplayed: Observable<boolean> = this.#isDisplayed.asObservable();

  overlayRef?: ComponentRef<OverlayComponent>;

  #hideOverlay$?: Subscription;

  readonly PADDING_BOTTOM = 12;

  ngOnDestroy(): void {
    this.#hideOverlay$?.unsubscribe();
  }

  displayOverlay(
    viewContainerRef: ViewContainerRef,
    element: ElementRef<HTMLElement>,
    templateRef: TemplateRef<unknown>,
    changeDetectorRef: ChangeDetectorRef
  ): void {
    this.#isDisplayed.next(true);
    const clientRect = element.nativeElement.getBoundingClientRect();

    this.overlayRef = viewContainerRef.createComponent(OverlayComponent);
    this.overlayRef.instance.position = {
      top:
        clientRect.top +
        element.nativeElement.offsetHeight +
        this.PADDING_BOTTOM,
      left: clientRect.left,
    };
    this.overlayRef.instance.content = templateRef;

    this.#hideOverlay$ = this.overlayRef.instance.outsideClicked.subscribe(
      () => {
        this.#isDisplayed.next(false);
        this.overlayRef?.destroy();
      }
    );

    changeDetectorRef.detectChanges();
  }
}
