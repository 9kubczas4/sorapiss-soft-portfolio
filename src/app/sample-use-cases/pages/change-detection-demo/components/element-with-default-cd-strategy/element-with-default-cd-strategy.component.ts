import { Component } from '@angular/core';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-element-with-default-cd-strategy',
  templateUrl: './element-with-default-cd-strategy.component.html',
  styleUrls: ['./../../shared/styles.scss'],
})
export class ElementWithDefaultCdStrategyComponent extends SampleBaseDirective {
  name = 'Component with default strategy';
}
