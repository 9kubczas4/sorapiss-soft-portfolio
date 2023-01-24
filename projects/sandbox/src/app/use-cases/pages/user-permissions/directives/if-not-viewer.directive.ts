import { takeUntil } from 'rxjs';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service';
import { Directive, OnInit, inject } from '@angular/core';
import { DestroyedDirective } from '@ng-utils';

@Directive({
  selector: '[ifNotViewer]',
  standalone: true,
  hostDirectives: [NgIf, DestroyedDirective],
})
export class IfNotViewerDirective implements OnInit {
  private readonly ngIfDirective = inject(NgIf);
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.isViewer$.pipe(takeUntil(this.destroyed$)).subscribe(isViewer => {
      this.ngIfDirective.ngIf = !isViewer;
    });
  }
}
