import { Component, OnInit, inject } from '@angular/core';
import { SAMPLE_TOKEN } from './const/sample-token';

@Component({
  selector: 'app-advanced-dependency-injection',
  templateUrl: './advanced-dependency-injection.component.html',
  styleUrls: ['./advanced-dependency-injection.component.scss'],
})
export class AdvancedDependencyInjectionComponent implements OnInit {
  readmeImport = import('./readme.md');

  private multiSampleTokens = inject(SAMPLE_TOKEN);

  ngOnInit(): void {
    console.log(this.multiSampleTokens);
  }
}
