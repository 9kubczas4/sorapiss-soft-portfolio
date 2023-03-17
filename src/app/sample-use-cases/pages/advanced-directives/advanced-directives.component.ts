import { takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { DestroyedDirective } from '@sorapiss-soft-portfolio/utils';

@Component({
  selector: 'ssp-advanced-directives',
  templateUrl: './advanced-directives.component.html',
  styleUrls: ['./advanced-directives.component.scss'],
  hostDirectives: [DestroyedDirective]
})
export class AdvancedDirectivesComponent implements OnInit {
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  readmeImport = import('raw-loader!./readme.md');
  displayedColumns = ['firstName', 'lastName', 'role'];

  formControl = new FormControl('10');

  ngOnInit(): void {
    this.formControl.valueChanges
    .pipe(takeUntil(this.destroyed$))
    .subscribe(value => {
      console.log(`Value: ${value}`);
      console.log(`Is valid: ${this.formControl.valid}`);
    });
  }
}
