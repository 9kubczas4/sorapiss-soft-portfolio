import { Component, Input } from '@angular/core';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-child-element-with-default-strategy',
  templateUrl: './child-element-with-default-strategy.component.html',
  styleUrls: ['./../../shared/styles.scss'],
})
export class ChildElementWithDefaultStrategyComponent extends SampleBaseDirective {
  @Input() name = 'Child with default strategy';
}
