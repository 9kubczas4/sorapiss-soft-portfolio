import { takeUntil } from 'rxjs';
import { UserService } from '../services/user.service';
import { Directive, OnInit, inject, Optional, Self } from '@angular/core';
import { DestroyedDirective } from '@sorapiss-soft-portfolio/utils';
import { MatButton } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';

@Directive({
  selector: '[sspDisableIfViewer]',
  standalone: true,
  hostDirectives: [DestroyedDirective],
})
export class DisableIfViewerDirective implements OnInit {
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  constructor(
    private readonly userService: UserService,
    @Optional() @Self() private readonly button: MatButton,
    @Optional() @Self() private readonly select: MatSelect,
  ) {}

  ngOnInit(): void {
    this.userService.isViewer$.pipe(takeUntil(this.destroyed$)).subscribe(isViewer => {
      if (this.button) {
        this.button.disabled = isViewer;
      } else if (this.select) {
        this.select.disabled = isViewer;
      }
    });
  }
}
