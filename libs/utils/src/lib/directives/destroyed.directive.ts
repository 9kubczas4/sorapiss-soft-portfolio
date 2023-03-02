import { Directive, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Directive({
  standalone: true,
})
export class DestroyedDirective implements OnDestroy {
  destroyed$ = new ReplaySubject<void>(1);

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
