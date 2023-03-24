import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.scss', './../../shared/styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildElementComponent extends SampleBaseDirective {
  @Input() name = 'Child';
}
